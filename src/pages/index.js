import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            让我们开始吧 🥵
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  useEffect(() => {
    const element = document.querySelector('.main-wrapper');
    element.classList.add('page-transition', 'page-entering');
    
    setTimeout(() => {
      element.classList.remove('page-entering');
      element.classList.add('page-entered');
    }, 50);
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Minecraft 游玩教程">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
