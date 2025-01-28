'use client';

import { useState } from 'react';
import styles from './CircleEffect.module.css';

interface Content {
  id: number;
  text: string;
}

const CircleEffect = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const contents: Content[] = [
    { id: 1, text: 'Financial Planning and Analysis (FP&A)' },
    { id: 2, text: 'Financial Consolidation and Close' },
    { id: 3, text: 'Profitability and Cost Management' },
    { id: 4, text: 'Narrative Reporting' },
    { id: 5, text: 'Enterprise Data Management (EDM)' },
    { id: 6, text: 'Tax Reporting' },
    { id: 7, text: 'Workforce Planning' },
    { id: 8, text: 'Budgeting and Forecasting' },
  ];

  const handleMouseEnter = (id: number) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.centerContent}>
        {hovered ? contents.find(item => item.id === hovered)?.text : 'Center Content'}
      </div>
      <div className={styles.circle}>
        {contents.map((content, index) => (
          <div
            key={content.id}
            className={styles.circleItem}
            style={{
              transform: `rotate(${index * 80}deg) translateY(-170px)`,
            }}
            onMouseEnter={() => handleMouseEnter(content.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={styles.contentItem}
              style={{ backgroundImage: 'url(/cloud-image.jpg)' }}
            >
              <span
                className={styles.text}
                style={{ transform: `rotate(-${index * 80}deg)` }} // Inverse rotation for text
              >
                {content.text}
              </span>
            </div>
            {/* Connecting line */}
            {/* <div
              className={styles.connectionLine}
              style={{
                transform: `rotate(${index * 60}deg)`,
              }}
            ></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleEffect;
