import { useContext } from 'react';
import { LogContext } from 'context/LogContext/logContext';

import styles from './styles.module.scss';

export function WeightTable() {
  const { logs } = useContext(LogContext);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Weight</th>
          <th>Weight Variation</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id}>
            <td>{log.weight}</td>
            <td>{log.weight}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(log.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
