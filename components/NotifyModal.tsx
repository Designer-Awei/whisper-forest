import React from 'react';

/**
 * 任务通知弹窗组件
 * @param {Object} props
 * @param {boolean} props.visible - 是否显示弹窗
 * @param {() => void} props.onClose - 关闭弹窗回调
 * @returns {JSX.Element|null}
 */
const NotifyModal: React.FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 3000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        minWidth: 380, maxWidth: 420, background: 'rgba(40,40,40,0.95)', color: '#fff', borderRadius: 20, padding: '48px 48px 48px 48px', zIndex: 3, fontSize: 20, boxShadow: '0 4px 24px #0003', border: '4px solid #ffe066', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', right: 16, top: 16, zIndex: 4, background: 'none', border: 'none', padding: 0, lineHeight: 1, cursor: 'pointer' }}
        >
          <span style={{ color: '#fff', fontSize: 36, fontWeight: 600, fontFamily: 'Arial, sans-serif', display: 'inline-block', width: 36, textAlign: 'center' }}>
            ×
          </span>
        </button>
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 32 }}>任务通知</div>
        <div style={{ width: 260, textAlign: 'center', color: '#ffe066' }}>
          （待开发）
        </div>
      </div>
    </div>
  );
};

export default NotifyModal; 