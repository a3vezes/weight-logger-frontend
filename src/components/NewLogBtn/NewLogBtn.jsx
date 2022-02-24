import styles from './styles.module.scss';

export function NewLogBtn({ toggleModal }) {
  return (
    <button className={styles.NewLogBtn} onClick={() => toggleModal()}>
      New Log
    </button>
  );
}
