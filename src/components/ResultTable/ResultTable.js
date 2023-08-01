import styles from './ResultTable.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const ResultTable = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year)}
              </td>
              <td>
                {formatter.format(props.initialInvestment - item.yearlyContribution * item.year)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
