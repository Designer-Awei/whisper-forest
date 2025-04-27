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

  const handlePrev = () => {
    prev();
  };

  const handleNext = () => {
    next();
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: '#ffffff',
    }}>
      <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 32 }}>剧集选择</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          shape="circle"
          icon={<LeftOutlined style={{ fontSize: 28, color: '#fff' }} />}
          onClick={handlePrev}
          style={{
            width: 60,
            height: 60,
            background: '#4b6842',
            border: '8px solid rgba(191,202,183,0.5)',
            boxShadow: '0 2px 8px #0002',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 32,
            transition: 'background 0.2s, border 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#7fa97a')}
          onMouseOut={e => (e.currentTarget.style.background = '#4b6842')}
          onMouseDown={e => (e.currentTarget.style.background = '#46602e')}
          onMouseUp={e => (e.currentTarget.style.background = '#7fa97a')}
        />
        <Card
          style={{
            width: 440,
            height: 260,
            background: '#f5f8f6',
            borderRadius: 24,
            boxShadow: '0 4px 24px #0001',
            transition: 'box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 0,
            position: 'relative',
          }}
          styles={{
            body: {
              padding: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
              background: 'none',
              position: 'relative',
            }
          }}
          hoverable
        >
          {/* 预览+文字整体 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, height: 184 }}>
            {/* 地图预览图 */}
            <div
              style={{
                width: 200,
                height: 144,
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 2px 8px #0002',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                marginLeft: 24,
                marginRight: 32,
              }}
              onClick={() => router.push(`/scene/${levels[current].id}`)}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={levels[current].cover}
                alt={levels[current].name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 16,
                  transition: 'none',
                }}
              />
            </div>
            {/* 文字区 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 0, paddingRight: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8, textAlign: 'left', width: 160 }}>{levels[current].name}</div>
              <div style={{ color: '#333', fontSize: 13, lineHeight: 1.7, textAlign: 'left', width: 160 }}>{levels[current].desc}</div>
            </div>
          </div>
          {/* 开始探索按钮，绝对定位于卡片底部居中 */}
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
              height: 44,
              position: 'absolute',
              left: '50%',
              bottom: 10,
              transform: 'translateX(-50%)',
            }}
            onClick={() => router.push(`/scene/${levels[current].id}`)}
            onMouseOver={e => (e.currentTarget.style.background = '#ffec99')}
            onMouseOut={e => (e.currentTarget.style.background = '#ffe066')}
          >
            开始探索
          </Button>
        </Card>
        <Button
          shape="circle"
          icon={<RightOutlined style={{ fontSize: 28, color: '#fff' }} />}
          onClick={handleNext}
          style={{
            width: 60,
            height: 60,
            background: '#4b6842',
            border: '8px solid rgba(191,202,183,0.5)',
            boxShadow: '0 2px 8px #0002',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            transition: 'background 0.2s, border 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#7fa97a')}
          onMouseOut={e => (e.currentTarget.style.background = '#4b6842')}
          onMouseDown={e => (e.currentTarget.style.background = '#46602e')}
          onMouseUp={e => (e.currentTarget.style.background = '#7fa97a')}
        />
      </div>
    </div>
  );
};

export default LevelSelector; 