import React from 'react';

/**
 * 设置弹窗组件
 * @param {Object} props
 * @param {boolean} props.visible - 是否显示弹窗
 * @param {() => void} props.onClose - 关闭弹窗回调
 * @param {number} props.bgmVolume - 背景音乐音量
 * @param {(v:number)=>void} props.onBgmVolumeChange - 背景音乐音量变化
 * @param {number} props.elementVolume - 声音元素音量
 * @param {(v:number)=>void} props.onElementVolumeChange - 声音元素音量变化
 * @returns {JSX.Element|null}
 */
const SettingsModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  bgmVolume: number;
  onBgmVolumeChange: (v: number) => void;
  elementVolume: number;
  onElementVolumeChange: (v: number) => void;
}> = ({ visible, onClose, bgmVolume, onBgmVolumeChange, elementVolume, onElementVolumeChange }) => {
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
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 32 }}>设置</div>
        <div style={{ width: 260, marginBottom: 32, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ flex: 1 }}>背景音乐</div>
            <div style={{ width: 40, textAlign: 'right', color: '#ffe066', fontWeight: 700 }}>{bgmVolume}</div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={bgmVolume}
            onChange={e => onBgmVolumeChange(Number(e.target.value))}
            style={{ width: '100%', height: 4, background: 'transparent', accentColor: '#ffe066', borderRadius: 2, margin: '8px 0' }}
          />
        </div>
        <div style={{ width: 260, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ flex: 1 }}>声音元素</div>
            <div style={{ width: 40, textAlign: 'right', color: '#ffe066', fontWeight: 700 }}>{elementVolume}</div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={elementVolume}
            onChange={e => onElementVolumeChange(Number(e.target.value))}
            style={{ width: '100%', height: 4, background: 'transparent', accentColor: '#ffe066', borderRadius: 2, margin: '8px 0' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsModal; 