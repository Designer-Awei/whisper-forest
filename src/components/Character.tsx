import React from 'react';

/**
 * 人物组件
 * @param {Object} props
 * @param {string} props.gifSrc - 人物gif图片路径
 * @param {boolean} props.faceLeft - 是否朝左
 * @returns {JSX.Element}
 */
const Character: React.FC<{ gifSrc: string; faceLeft: boolean }> = ({ gifSrc, faceLeft }) => {
  return (
    <img
      src={gifSrc}
      alt="character"
      style={{
        width: '120px',
        height: 'auto',
        transform: faceLeft ? 'scaleX(-1)' : 'none',
        transition: 'transform 0.2s',
      }}
    />
  );
};

export default Character;
