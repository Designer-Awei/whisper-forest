import React, { useState } from 'react';
import SettingsModal from './SettingsModal';
import BagModal from './BagModal';
import NotifyModal from './NotifyModal';
import { Slider } from 'antd';

/**
 * TopBar 顶部功能区组件（集成设置、背包、通知弹窗）
 * @param {Object} props
 * @param {number} props.bgmVolume - 背景音乐音量
 * @param {(v:number)=>void} props.onBgmVolumeChange - 背景音乐音量变化
 * @param {number} props.elementVolume - 声音元素音量
 * @param {(v:number)=>void} props.onElementVolumeChange - 声音元素音量变化
 * @returns {JSX.Element}
 */
const iconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: '#fff',
  border: '4px solid rgba(190,190,190,0.5)',
  boxShadow: '0 2px 8px #0001',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s',
};

const TopBar: React.FC<{
  bgmVolume: number;
  onBgmVolumeChange: (v: number) => void;
  elementVolume: number;
  onElementVolumeChange: (v: number) => void;
}> = ({ bgmVolume, onBgmVolumeChange, elementVolume, onElementVolumeChange }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [showNotify, setShowNotify] = useState(false);

  return (
    <>
      <div style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 2001, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100vw', maxWidth: 990, aspectRatio: '1140/820', height: 'auto', position: 'relative', pointerEvents: 'none', display: 'flex' }}>
          {/* 左上角背包 */}
          <div style={{ position: 'absolute', left: 32, top: 32, pointerEvents: 'auto' }}>
            <div style={iconStyle} onClick={() => setShowBag(true)}>
              <img src="/assets/icon/背包.ico" alt="背包" style={{ width: 28, height: 28 }} />
            </div>
          </div>
          {/* 右上角通知和设置 */}
          <div style={{ position: 'absolute', right: 32, top: 32, display: 'flex', gap: 24, pointerEvents: 'auto' }}>
            <div style={iconStyle} onClick={() => setShowNotify(true)}>
              <img src="/assets/icon/通知.ico" alt="通知" style={{ width: 28, height: 28 }} />
            </div>
            <div style={iconStyle} onClick={() => setShowSettings(true)}>
              <img src="/assets/icon/设置.ico" alt="设置" style={{ width: 28, height: 28 }} />
            </div>
          </div>
        </div>
      </div>
      {/* 弹窗集成 */}
      <SettingsModal
        visible={showSettings}
        onClose={() => setShowSettings(false)}
        bgmVolume={bgmVolume}
        onBgmVolumeChange={onBgmVolumeChange}
        elementVolume={elementVolume}
        onElementVolumeChange={onElementVolumeChange}
      />
      <BagModal
        visible={showBag}
        onClose={() => setShowBag(false)}
      />
      <NotifyModal
        visible={showNotify}
        onClose={() => setShowNotify(false)}
      />
    </>
  );
};

export default TopBar; 