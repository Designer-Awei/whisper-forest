import React from 'react';
import { useRouter } from 'next/router';

/**
 * 作品分享页
 * 根据作品id展示混音作品，支持试听和分享
 * @returns {JSX.Element}
 */
const SharePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {/* 作品id: {id}，混音作品展示区 */}
    </div>
  );
};

export default SharePage; 