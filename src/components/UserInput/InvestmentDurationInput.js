import React, { useState } from "react";
import styles from "./InvestmentDurationInput.module.css";
const InvestmentDurationInput = (props) => {
  const [enteredDuration, setDuration] = useState("");
  const durationChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInvestmentDurationValid(true);
    }
    if (enteredDuration.trim().length === 0) {
      setIsInvestmentDurationValid(false);
      return;
    }
    setDuration(event.target.value);
    props.onChangeInvestmentDuration(enteredDuration);
  };
  const [isInvestmentDurationValid, setIsInvestmentDurationValid] =
    useState(true);
  return (
    <p>
      <label
        className={styles[`${isInvestmentDurationValid ? "" : "invalid"}`]}
        htmlFor="duration"
      >
        Investment Duration (years)
      </label>
      <input
        // value={enteredDuration}
        type="number"
        id="duration"
        onChange={durationChangeHandler}
        className={styles[`${isInvestmentDurationValid ? "" : "invalid"}`]}
      />
    </p>
  );
};

export default InvestmentDurationInput;
