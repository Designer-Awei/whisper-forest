import React from 'react';
import { useRouter } from 'next/router';

/**
 * 场景页面
 * 根据关卡id渲染对应的地图场景、人物、声音元素等
 * @returns {JSX.Element}
 */
const ScenePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {/* 场景id: {id}，场景内容渲染区 */}
    </div>
  );
};

export default ScenePage; 