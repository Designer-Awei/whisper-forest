import React from 'react';

/**
 * 对话动画组件
 * @param {Object} props
 * @param {string} props.gifSrc - 动画gif路径
 * @param {string} [props.text] - 可选的对话文本
 * @returns {JSX.Element}
 */
const DialogAnimation: React.FC<{ gifSrc: string; text?: string }> = ({ gifSrc, text }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={gifSrc} alt="dialog-animation" style={{ width: '200px', height: 'auto' }} />
      {text && <div style={{ marginTop: 8 }}>{text}</div>}
    </div>
  );
};

export default DialogAnimation; 