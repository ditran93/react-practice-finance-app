import React, { useState } from "react";
import styles from "./CurrentSavingsInput.module.css";
const CurrentSavingsInput = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [isCurrentSavingsValid, setIsCurrentSavingsValid] = useState(true);
  const currentSavingsChangeHandler = (event) => {
    // if (event.target.value.trim().length > 0) {
    //   setIsCurrentSavingsValid(true);
    // }
    // if (enteredCurrentSavings.trim().length === 0) {
    //   setIsCurrentSavingsValid(false);
    //   return;
    // }
    setCurrentSavings(event.target.value);
    props.onChangeCurrentSavings(enteredCurrentSavings);
  };
  return (
    <p>
      <label
           className={styles[`${isCurrentSavingsValid ? "" : "invalid"}`]}
        htmlFor="current-savings"
      >
        Current Savings ($)
      </label>
      <input
        // value={enteredCurrentSavings}
        type="number"
        id="current-savings"
        onChange={currentSavingsChangeHandler}
        className={styles[`${isCurrentSavingsValid ? "" : "invalid"}`]}
      />
    </p>
  );
};

export default CurrentSavingsInput;
