import "./ResultTable.css";
import YearlyRecord from "./YearlyRecord.js";

const ResultTable = (props) => {
  console.log("from table");
  console.log(props.investmentData);
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {props.investmentData.map((item) => (
          <YearlyRecord 
            key = {item.id}
            year = {item.year}
            totalSavings = {item.savingsEndOfYear}
            interest={item.yearlyInterest}
            totalInterest={item.totalInterest}
            investedCapital={item.investedCapital}
          />
        ))}
      </table>
    </div>
  );
};

export default ResultTable;
