import React, { useEffect, useState, useRef } from 'react';
import DialogModal from '../../components/DialogModal';
import TopBar from '../../components/TopBar';
import { Howl } from 'howler';
import Character from '../../components/Character';

/**
 * 森林场景页面
 * 进入时先展示剧情对话，对话结束后进入正式场景内容
 * 支持地图背景和人物移动，点击场景任意位置，人物平滑移动到目标点，左右移动时自动镜像
 * @returns {JSX.Element}
 */
const ForestScene: React.FC = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [dialogLines, setDialogLines] = useState<string[]>([]);
  const [bgmVolume, setBgmVolume] = useState(100);
  const [elementVolume, setElementVolume] = useState(100);
  const bgmRef = useRef<Howl | null>(null);
  // 记录图片原始尺寸
  const [imgNatural, setImgNatural] = useState({ width: 0, height: 0 });
  // 记录容器尺寸
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  // 图片显示区域（object-fit:contain算法计算）
  const [imgArea, setImgArea] = useState({ left: 0, top: 0, width: 0, height: 0 });
  // 人物位置（以图片显示区域为原点，图片底部中点）
  const [charPos, setCharPos] = useState<{ x: number; y: number } | null>(null);
  const [faceLeft, setFaceLeft] = useState(false);
  const [moving, setMoving] = useState(false);
  const moveRef = useRef<NodeJS.Timeout | null>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  // 记录上一次图片显示区域（用于resize时人物位置映射）
  const prevImgArea = useRef<{ width: number; height: number } | null>(null);

  useEffect(() => {
    fetch('/assets/scenes/forest/dialog.txt')
      .then(res => res.text())
      .then(txt => setDialogLines(txt.split('\n').filter(line => line.trim())));
  }, []);

  // 播放背景音乐（只在挂载时创建和播放）
  useEffect(() => {
    if (!bgmRef.current) {
      bgmRef.current = new Howl({
        src: ['/assets/scenes/forest/forest_bgm.mp3'],
        loop: true,
        volume: bgmVolume / 100,
      });
      bgmRef.current.play();
    }
    return () => {
      if (bgmRef.current) {
        bgmRef.current.stop();
        bgmRef.current.unload();
        bgmRef.current = null;
      }
    };
    // eslint-disable-next-line
  }, []);

  // 音量变化时只调整音量
  useEffect(() => {
    if (bgmRef.current) {
      bgmRef.current.volume(bgmVolume / 100);
    }
  }, [bgmVolume]);

  // 监听窗口resize，更新容器尺寸
  useEffect(() => {
    const updateSize = () => {
      if (!sceneRef.current) return;
      setContainerSize({
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
      });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // 图片加载后，记录原始尺寸
  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setImgNatural({ width: img.naturalWidth, height: img.naturalHeight });
  };

  // clamp目标点，确保人物整体不会超出图片显示区域（图片底部中点）
  const clampToImgArea = (x: number, y: number, w?: number, h?: number) => {
    const halfW = 60, fullH = 180;
    const width = w ?? imgArea.width;
    const height = h ?? imgArea.height;
    const minX = halfW;
    const maxX = width - halfW;
    const minY = fullH;
    const maxY = height;
    return {
      x: Math.max(minX, Math.min(x, maxX)),
      y: Math.max(minY, Math.min(y, maxY)),
    };
  };

  // 计算图片显示区域（object-fit:contain算法）
  useEffect(() => {
    const W = containerSize.width;
    const H = containerSize.height;
    const w = imgNatural.width;
    const h = imgNatural.height;
    if (!W || !H || !w || !h) return;
    const scale = Math.min(W / w, H / h);
    const imgW = w * scale;
    const imgH = h * scale;
    const imgLeft = (W - imgW) / 2;
    const imgTop = (H - imgH) / 2;
    setImgArea({ left: imgLeft, top: imgTop, width: imgW, height: imgH });
    // --- 关键：图片区域变化时，映射人物坐标，保持相对位置不变（底部中点）---
    setCharPos(pos => {
      if (!pos) return { x: imgW / 2, y: imgH }; // 初始底部中点
      if (!prevImgArea.current || prevImgArea.current.width === 0 || prevImgArea.current.height === 0) {
        // 首次加载
        return pos;
      }
      // 计算人物在旧区域的相对比例（底部中点）
      const relX = pos.x / prevImgArea.current.width;
      const relY = pos.y / prevImgArea.current.height;
      // 映射到新区域
      const newX = relX * imgW;
      const newY = relY * imgH;
      return clampToImgArea(newX, newY, imgW, imgH);
    });
    prevImgArea.current = { width: imgW, height: imgH };
  }, [containerSize, imgNatural]);

  // 移动到目标点（坐标以图片显示区域为原点，底部中点）
  const moveTo = (target: { x: number; y: number }) => {
    if (!charPos) return;
    if (moveRef.current) clearInterval(moveRef.current);
    setFaceLeft(target.x < charPos.x);
    setMoving(true);
    moveRef.current = setInterval(() => {
      setCharPos(prev => {
        if (!prev) return null;
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 4) {
          clearInterval(moveRef.current!);
          setMoving(false);
          return clampToImgArea(target.x, target.y);
        }
        const step = Math.min(8, dist);
        const next = {
          x: prev.x + (dx / dist) * step,
          y: prev.y + (dy / dist) * step,
        };
        return clampToImgArea(next.x, next.y);
      });
    }, 16);
  };

  // 清理定时器
  useEffect(() => () => { if (moveRef.current) clearInterval(moveRef.current); }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <TopBar
        bgmVolume={bgmVolume}
        onBgmVolumeChange={setBgmVolume}
        elementVolume={elementVolume}
        onElementVolumeChange={setElementVolume}
      />
      {/* 正式场景内容（对话结束后显示） */}
      {!showDialog && (
        <div
          ref={sceneRef}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            left: 0,
            top: 0,
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onClick={e => {
            // 只有图片区域有效时才允许移动
            if (!imgArea.width || !imgArea.height) return;
            // 1. 获取点击点在容器内的坐标
            const rect = sceneRef.current!.getBoundingClientRect();
            const xInScene = e.clientX - rect.left;
            const yInScene = e.clientY - rect.top;
            // 2. 转为图片内容区域内的坐标（底部中点）
            const x = xInScene - imgArea.left;
            const y = yInScene - imgArea.top;
            // 3. clamp到图片内容区域（底部中点）
            const { x: cx, y: cy } = clampToImgArea(x, y);
            // 4. 移动，确保charPos就是图片内容区域的底部中点
            moveTo({ x: cx, y: cy });
          }}
        >
          {/* 背景图片 */}
          <img
            ref={bgRef}
            src={'/assets/scenes/forest/forest_bg.jpg'}
            alt="背景"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100vw',
              height: '100vh',
              objectFit: 'contain',
              objectPosition: 'center',
              background: '#222',
              zIndex: 0,
              pointerEvents: 'none',
            }}
            onLoad={onImgLoad}
          />
          {/* 场景内容容器（严格以图片显示区域为准） */}
          <div
            style={{
              position: 'absolute',
              left: imgArea.left,
              top: imgArea.top,
              width: imgArea.width,
              height: imgArea.height,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            {/* 人物，坐标以图片显示区域为原点，底部中点，渲染时left: charPos.x-60, top: charPos.y-240 */}
            {charPos && (
              <div
                style={{
                  position: 'absolute',
                  left: charPos.x - 60,
                  top: charPos.y - 180,
                  width: 120,
                  height: 180,
                  pointerEvents: 'none',
                  transition: moving ? 'none' : 'left 0.2s, top 0.2s',
                }}
              >
                <Character gifSrc={'/assets/characters/character.gif'} faceLeft={faceLeft} />
              </div>
            )}
          </div>
        </div>
      )}
      {/* 剧情对话弹窗 */}
      {showDialog && (
        <DialogModal
          dialogLines={dialogLines}
          onFinish={() => setShowDialog(false)}
          bgUrl={'/assets/scenes/forest/forest_bg.jpg'}
          characterUrl={'/assets/icon/character_dialog.png'}
        />
      )}
    </div>
  );
};

export default ForestScene; 