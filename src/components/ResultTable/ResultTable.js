import "./ResultTable.css";
import YearlyRecord from "./YearlyRecord.js";

const ResultTable = (props) => {
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

          <YearlyRecord />
        

      </table>
    </div>
  );
};

export default ResultTable;
