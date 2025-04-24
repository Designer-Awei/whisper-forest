import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

/**
 * 关卡选择页（Ant Design 版）
 */
const levels = [
  {
    id: 'forest',
    name: '迷雾森林',
    desc: '深受耳鸣困扰的小七，受医生引荐，来到迷雾森林，寻找疗养耳鸣声音，此时迷雾中似乎传来了沙沙声……',
    cover: '/assets/scenes/forest/forest_bg.jpg'
  },
  {
    id: 'lake',
    name: '静谧湖泊',
    desc: '小七又来到了湖泊边，这里有许多治愈的水声和鸟鸣，或许可以收集属于湖泊的声音！',
    cover: '/assets/scenes/lake/lake_bg.jpg'
  }
];

const LevelSelector: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const prev = () => setCurrent((current - 1 + levels.length) % levels.length);
  const next = () => setCurrent((current + 1) % levels.length);

  return (
    <div style={{ textAlign: 'center', padding: 32 }}>
      <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 32 }}>剧集选择</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          shape="circle"
          icon={<LeftOutlined style={{ fontSize: 28, color: '#fff' }} />}
          onClick={prev}
          style={{
            width: 60,
            height: 60,
            background: '#5c7342',
            border: 'none',
            boxShadow: '0 2px 8px #0002',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 32,
          }}
        />
        <Card
          style={{
            width: 520,
            height: 440,
            background: '#f5f8f6',
            borderRadius: 24,
            boxShadow: '0 4px 24px #0001',
            transition: 'box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 0
          }}
          bodyStyle={{
            padding: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            background: 'none'
          }}
          hoverable
        >
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24 }}>
            <img
              src={levels[current].cover}
              alt={levels[current].name}
              style={{
                width: 400,
                height: 220,
                borderRadius: 16,
                objectFit: 'cover',
                boxShadow: '0 2px 8px #0002',
                marginBottom: 16,
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onClick={() => router.push(`/scene/${levels[current].id}`)}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{levels[current].name}</div>
            <div style={{
              color: '#333',
              fontSize: 16,
              marginBottom: 0,
              lineHeight: 1.7,
              minHeight: 60,
              maxHeight: 80,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              whiteSpace: 'pre-line',
              textAlign: 'center',
              width: 400
            }}>{levels[current].desc}</div>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginBottom: 24 }}>
            <Button
              type="primary"
              size="large"
              style={{
                background: '#ffe066',
                color: '#333',
                border: 'none',
                borderRadius: 24,
                fontWeight: 'bold',
                fontSize: 18,
                boxShadow: '0 2px 8px #0001',
                width: 180,
                height: 44
              }}
              onClick={() => router.push(`/scene/${levels[current].id}`)}
              onMouseOver={e => (e.currentTarget.style.background = '#ffec99')}
              onMouseOut={e => (e.currentTarget.style.background = '#ffe066')}
            >
              开始探索
            </Button>
          </div>
        </Card>
        <Button
          shape="circle"
          icon={<RightOutlined style={{ fontSize: 28, color: '#fff' }} />}
          onClick={next}
          style={{
            width: 60,
            height: 60,
            background: '#5c7342',
            border: 'none',
            boxShadow: '0 2px 8px #0002',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 32,
          }}
        />
      </div>
    </div>
  );
};

export default LevelSelector; 