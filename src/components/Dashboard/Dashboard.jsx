import { Card } from './Card';
import styles from './styles.module.scss';
import person from 'assets/person.svg';
import goal from 'assets/goal.svg';
import run from 'assets/run.svg';

export function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <Card title='Starting Weight' weight='90' svg={person} />
      <Card title='Current Weight' weight='88' svg={run} />
      <Card title='Weight Goal' weight='80' svg={goal} />
    </section>
  );
}
