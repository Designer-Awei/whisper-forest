import React, { useEffect, useState } from 'react';
import DialogModal from '../../components/DialogModal';
import TopBar from '../../components/TopBar';

/**
 * 森林场景页面
 * 进入时先展示剧情对话，对话结束后进入正式场景内容
 * @returns {JSX.Element}
 */
const ForestScene: React.FC = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [dialogLines, setDialogLines] = useState<string[]>([]);

  useEffect(() => {
    fetch('/assets/scenes/forest/dialog.txt')
      .then(res => res.text())
      .then(txt => setDialogLines(txt.split('\n').filter(line => line.trim())));
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <TopBar />
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