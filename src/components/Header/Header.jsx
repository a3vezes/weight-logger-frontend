import React from 'react';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>
          Weight<span className={styles.header__span}>Logger</span>
        </h1>

        <p className={styles.header__user}>Welcome</p>

        <button>New Log</button>
      </div>
    </header>
  );
}
