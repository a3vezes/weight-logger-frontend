import styles from './styles.module.scss';

export function Card({ title, weight, svg }) {
  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        <h5 className={styles.card__title}>{title}</h5>
        <img className={styles.card__logo} src={svg} alt='' />
      </header>

      <h1 className={styles.card__weight}>{weight} Kgs</h1>
    </div>
  );
}
