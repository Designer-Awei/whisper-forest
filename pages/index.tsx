import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';

/**
 * 游戏主页
 * 显示LOGO和"开始游戏"按钮，点击跳转到关卡选择页
 * @returns {JSX.Element}
 */
const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#f5f8f6' }}>
      <img src="/assets/icon/logo.png" alt="Echo Scape Logo" style={{ width: 180, marginBottom: 48 }} />
      <Button
        type="primary"
        size="large"
        style={{ background: '#ffe066', color: '#333', border: 'none', borderRadius: 24, fontWeight: 'bold', fontSize: 22, boxShadow: '0 2px 8px #0001', padding: '16px 48px' }}
        onClick={() => router.push('/level')}
        onMouseOver={e => (e.currentTarget.style.background = '#ffec99')}
        onMouseOut={e => (e.currentTarget.style.background = '#ffe066')}
      >
        开始游戏
      </Button>
    </div>
  );
};

export default Home; 