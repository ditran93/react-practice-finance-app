import styles from "./InvestmentForm.module.css";
import React, { useState } from "react";
import Button from "../UI/Button/Button.js";
import CurrentSavingsInput from "../UserInput/CurrentSavingsInput";
import ExpectedInterestInput from "../UserInput/ExpectedInterestInput";
import InvestmentDurationInput from "../UserInput/InvestmentDurationInput";
import YearlyContributionInput from "../UserInput/YearlyContributionInput";

const InvenstmentForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredCurrentSavings.trim().length === 0) {
      setIsCurrentSavingsValid(false);
      return;
    }
    if (enteredYearlyContribution.trim().length === 0) {
      setIsYearlySavingsValid(false);
      return;
    }
    if (enteredDuration.trim().length === 0) {
      setIsInvestmentDurationValid(false);
      return;
    }
    if (enteredExpectedReturn.trim().length === 0) {
      setIsExpectedInterestValid(false);
      return;
    }
    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlyContribution: enteredYearlyContribution,
      expectedReturn: enteredExpectedReturn,
      duration: enteredDuration,
    };
    props.onSaveInvestmentData(investmentData);
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  const resetButtonHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
    setIsCurrentSavingsValid(true);
    setIsYearlySavingsValid(true);
    setIsInvestmentDurationValid(true);
    setIsExpectedInterestValid(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <CurrentSavingsInput ></CurrentSavingsInput>
        <YearlyContributionInput></YearlyContributionInput>
      </div>
      <div className={styles["input-group"]}>
        <ExpectedInterestInput></ExpectedInterestInput>
        <InvestmentDurationInput></InvestmentDurationInput>
      </div>
      <p className={styles.actions}>
        <Button onClick={resetButtonHandler} type="reset" className="buttonAlt">
          Reset
        </Button>
        <Button type="submit" className="button">
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default InvenstmentForm;
