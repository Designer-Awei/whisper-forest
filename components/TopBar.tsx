import React from 'react';

/**
 * TopBar 顶部功能区组件
 * 展示背包、通知、设置三个功能按钮，分别位于左上和右上
 * @param {Object} props
 * @param {() => void} [props.onBagClick] - 背包点击事件
 * @param {() => void} [props.onNotifyClick] - 通知点击事件
 * @param {() => void} [props.onSettingsClick] - 设置点击事件
 * @returns {JSX.Element}
 */
const iconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: '#fff',
  border: '4px solid rgba(190,190,190,0.5)', // 灰色线框+50%透明度
  boxShadow: '0 2px 8px #0001',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s',
};

const TopBar: React.FC<{
  onBagClick?: () => void;
  onNotifyClick?: () => void;
  onSettingsClick?: () => void;
}> = ({ onBagClick, onNotifyClick, onSettingsClick }) => {
  return (
    <div style={{ position: 'fixed', left: 0, top: 0, width: '100vw', zIndex: 2001, pointerEvents: 'none' }}>
      {/* 左上角背包 */}
      <div style={{ position: 'absolute', left: 40, top: 32, pointerEvents: 'auto' }}>
        <div style={iconStyle} onClick={onBagClick}>
          <img src="/assets/icon/背包.ico" alt="背包" style={{ width: 28, height: 28 }} />
        </div>
      </div>
      {/* 右上角通知和设置 */}
      <div style={{ position: 'absolute', right: 52, top: 32, display: 'flex', gap: 24, pointerEvents: 'auto' }}>
        <div style={iconStyle} onClick={onNotifyClick}>
          <img src="/assets/icon/通知.ico" alt="通知" style={{ width: 28, height: 28 }} />
        </div>
        <div style={iconStyle} onClick={onSettingsClick}>
          <img src="/assets/icon/设置.ico" alt="设置" style={{ width: 28, height: 28 }} />
        </div>
      </div>
    </div>
  );
};

export default TopBar; 