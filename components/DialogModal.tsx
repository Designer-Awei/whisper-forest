import React, { useState } from 'react';

/**
 * 对话弹窗组件
 * 展示虚化背景、左侧角色图片、对话内容和"好~"按钮，逐句展示对话
 * @param {Object} props
 * @param {string[]} props.dialogLines - 对话内容数组
 * @param {() => void} props.onFinish - 对话结束回调
 * @param {string} props.bgUrl - 背景图片路径
 * @param {string} props.characterUrl - 角色图片路径
 * @returns {JSX.Element}
 */
const DialogModal: React.FC<{
  dialogLines: string[];
  onFinish: () => void;
  bgUrl: string;
  characterUrl: string;
}> = ({ dialogLines, onFinish, bgUrl, characterUrl }) => {
  const [index, setIndex] = useState(0);
  const isLast = index >= dialogLines.length - 1;

  return (
    <div style={{
      position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* 虚化背景 */}
      <img
        src={bgUrl}
        alt="背景"
        style={{
          position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', 
          objectFit: 'contain',
          objectPosition: 'center',
          background: '#222',
          zIndex: 0
        }}
      />
      {/* 角色图片（与地图等高，中心对齐，大小与背景图一致） */}
      <img
        src={characterUrl}
        alt="角色"
        style={{
          position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh',
          objectFit: 'contain',
          objectPosition: 'center',
          zIndex: 2,
          pointerEvents: 'none', // 防止遮挡交互
        }}
      />
      {/* 对话框 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '40%',
          transform: 'translateX(-50%)', // 水平居中
          width: 520,
          background: 'rgba(40,40,40,0.82)',
          color: '#fff',
          borderRadius: 20,
          padding: '38px 38px 50px 38px',
          zIndex: 1, // 保证人物在对话框之上
          fontSize: 22,
          boxShadow: '0 4px 24px #0003',
          border: '4px solid #ffe066',
          boxSizing: 'border-box',
          overflow: 'visible',
        }}
      >
        <div style={{ whiteSpace: 'pre-line', lineHeight: 1.8, paddingLeft: 60 }}>{dialogLines[index]}</div>
        <button
          style={{
            position: 'absolute',
            left: '80%',
            bottom: -24,
            transform: 'translateX(-50%)',
            background: '#ffe066',
            color: '#333',
            border: 'none',
            borderRadius: 24,
            padding: '10px 34px',
            fontWeight: 'bold',
            fontSize: 20,
            cursor: 'pointer',
            zIndex: 4,
            boxShadow: '2px 2px 1px rgb(111, 72, 0)',
            transition: 'background 0.2s',
          }}
          onClick={() => isLast ? onFinish() : setIndex(i => i + 1)}
          onMouseOver={e => (e.currentTarget.style.background = '#ffec99')}
          onMouseOut={e => (e.currentTarget.style.background = '#ffe066')}
        >
          {isLast ? '好~' : '好~'}
        </button>
      </div>
    </div>
  );
};

export default DialogModal; 