import React from 'react';
import styles from './FloatingElements.module.css';

export default function FloatingElements() {
  return (
    <div className={styles.floatingContainer}>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`${styles.floatingElement} ${styles[`element${i + 1}`]}`}
        >
          ⬜
        </div>
      ))}
    </div>
  );
}