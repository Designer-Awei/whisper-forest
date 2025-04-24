import React from 'react';

/**
 * 声音元素组件
 * @param {Object} props
 * @param {string} props.iconSrc - 声音元素图标路径
 * @param {() => void} props.onCollect - 收集声音元素的回调
 * @returns {JSX.Element}
 */
const SoundElement: React.FC<{ iconSrc: string; onCollect: () => void }> = ({ iconSrc, onCollect }) => {
  return (
    <img
      src={iconSrc}
      alt="sound-element"
      style={{ width: '48px', height: '48px', cursor: 'pointer' }}
      onClick={onCollect}
    />
  );
};

export default SoundElement; 