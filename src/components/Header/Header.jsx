import { NewLogBtn } from 'components';

import styles from './styles.module.scss';

export function Header({ toggleModal }) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>
          Weight<span className={styles.header__span}>Logger</span>
        </h1>

        <p className={styles.header__user}>Welcome</p>

        <NewLogBtn toggleModal={toggleModal} />
      </div>
    </header>
  );
}
