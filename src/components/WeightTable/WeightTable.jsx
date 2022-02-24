import styles from './styles.module.scss';

export function WeightTable() {
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
        <tr>
          <td>80</td>
          <td>1.0</td>
          <td>01/01/2022</td>
        </tr>
        <tr>
          <td>80</td>
          <td>1.0</td>
          <td>01/01/2022</td>
        </tr>
        <tr>
          <td>80</td>
          <td>1.0</td>
          <td>01/01/2022</td>
        </tr>
      </tbody>
    </table>
  );
}
