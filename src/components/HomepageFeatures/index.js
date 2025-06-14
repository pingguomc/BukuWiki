import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '通俗易懂',
    Svg: require('@site/static/img/grass_block.svg').default,
    description: 'BukuWiki 以原版为基础，为所有 Minecraft 玩家提供游玩教程，并用最新手小白的语言去教会所有玩家游玩 Minecraft',
    delay: 0,
  },
  {
    title: '庞大内容', 
    Svg: require('@site/static/img/crafting_table.svg').default,
    description: '从 0 开始启动你的第一个 Minecraft 客户端，再到安装模组加载器，以及游玩途中的报错你都能在这里找到解决方案',
    delay: 200,
  },
  {
    title: '社区驱动',
    Svg: require('@site/static/img/furnace.svg').default,
    description: 'BukuWiki 全部开源，由各路社区开发者为 BukuWiki 编写和开发内容，感谢各位的支持和贡献！',
    delay: 400,
  },
];

function Feature({Svg, title, description, delay}) {
  const featureRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      className={clsx('col col--4', styles.feature, {
        [styles.featureVisible]: isVisible
      })} 
      ref={featureRef}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}