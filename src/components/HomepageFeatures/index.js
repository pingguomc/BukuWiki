import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import AnimatedCard from '../AnimatedCard';

const FeatureList = [
  {
    title: 'Minecraft游戏指南',
    icon: '🎮',
    description: '为各版本Minecraft玩家提供全面的游戏指南',
  },
  {
    title: '模组与插件教程',
    icon: '🧩',
    description: '详细的模组安装和使用说明',
  },
  {
    title: '社区驱动',
    icon: '👥',
    description: '由玩家社区共同构建的知识库',
  },
];

export default function HomepageFeatures() {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <div key={idx} className="col col--4">
              <AnimatedCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={idx * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
