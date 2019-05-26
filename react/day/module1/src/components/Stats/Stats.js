import React from 'react';
import styles from './Stats.module.css';

const Stats = ({ stats }) => (
  <section className={styles.main}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.list}>
      {stats.map(el => (
        <li
          style={(bacgroundColor = randColor())}
          className={styles.item}
          key={el.id}
        >
          <span className={styles.block}>{el.label}</span>
          <span className={styles.block}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

const randColor = () => {
  let ran = Math.floor(Math.random() * 255);
  return `rgb(${ran},${ran},${ran})`;
};

export default Stats;
