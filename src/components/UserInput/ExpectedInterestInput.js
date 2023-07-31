import React, { useState } from "react";
import styles from "./ExpectedInterestInput.module.css";
const ExpectedInterestInput = (props) => {
  const [enteredExpectedReturn, setExpectedReturn] = useState("");
  const expectedReturnChangeHandler = (event) => {
    // if (event.target.value.trim().length > 0) {
    //   setIsExpectedInterestValid(true);
    // }
    // if (enteredExpectedReturn.trim().length === 0) {
    //   setIsExpectedInterestValid(false);
    //   return;
    // }
    setExpectedReturn(event.target.value);
    props.onChangeExpectedInterest(enteredExpectedReturn);
  };
  const [isExpectedInterestValid, setIsExpectedInterestValid] = useState(true);
  return (
    <p>
      <label
        // className={styles[`${isExpectedInterestValid ? "" : "invalid"}`]}
        htmlFor="expected-return"
      >
        Expected Interest (%, per year)
      </label>
      <input
        // value={enteredExpectedReturn}
        type="number"
        id="expected-return"
        onChange={expectedReturnChangeHandler}
        className={styles[`${isExpectedInterestValid ? "" : "invalid"}`]}
      />
    </p>
  );
};

export default ExpectedInterestInput;
