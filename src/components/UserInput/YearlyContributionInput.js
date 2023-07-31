import React, { useState } from "react";
import styles from "./YearlyContributionInput.module.css";
const YearlyContributionInput = (props) => {
  const [enteredYearlyContribution, setYearlyContribution] = useState("");
  const [isYearlySavingsValid, setIsYearlySavingsValid] = useState(true);
  const yearlyContributionChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsYearlySavingsValid(true);
    }
    setYearlyContribution(event.target.value);
  };
  return;
  <p>
    <label
      className={styles[`${isYearlySavingsValid ? "" : "invalid"}`]}
      htmlFor="yearly-contribution"
    >
      Yearly Savings ($)
    </label>
    <input
      value={enteredYearlyContribution}
      type="number"
      id="yearly-contribution"
      onChange={yearlyContributionChangeHandler}
      className={styles[`${isYearlySavingsValid ? "" : "invalid"}`]}
    />
  </p>;
};

export default YearlyContributionInput;
