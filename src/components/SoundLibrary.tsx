import React from 'react';

/**
 * 声音库组件
 * 展示已收集的声音元素，支持点击播放
 * @param {Object} props
 * @param {Array<{iconSrc: string, onPlay: () => void}>} props.sounds - 声音元素列表
 * @returns {JSX.Element}
 */
const SoundLibrary: React.FC<{ sounds: { iconSrc: string; onPlay: () => void }[] }> = ({ sounds }) => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {sounds.map((sound, idx) => (
        <img
          key={idx}
          src={sound.iconSrc}
          alt={`sound-${idx}`}
          style={{ width: '48px', height: '48px', cursor: 'pointer' }}
          onClick={sound.onPlay}
        />
      ))}
    </div>
  );
};

export default SoundLibrary; 