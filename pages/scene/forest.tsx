import React, { useEffect, useState, useRef } from 'react';
import DialogModal from '../../components/DialogModal';
import TopBar from '../../components/TopBar';
import { Howl } from 'howler';

/**
 * 森林场景页面
 * 进入时先展示剧情对话，对话结束后进入正式场景内容
 * @returns {JSX.Element}
 */
const ForestScene: React.FC = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [dialogLines, setDialogLines] = useState<string[]>([]);
  const [bgmVolume, setBgmVolume] = useState(100);
  const [elementVolume, setElementVolume] = useState(100);
  const bgmRef = useRef<Howl | null>(null);

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
        <div style={{ width: '100vw', height: '100vh', background: '#cde3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, color: '#333' }}>
          这里是森林关卡内容（待开发）
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