import styles from "./InvestmentForm.module.css";
import React, { useState } from "react";
import Button from "../UI/Button/Button.js";
import CurrentSavingsInput from "../UserInput/CurrentSavingsInput";
import ExpectedInterestInput from "../UserInput/ExpectedInterestInput";
import InvestmentDurationInput from "../UserInput/InvestmentDurationInput";
import YearlyContributionInput from "../UserInput/YearlyContributionInput";

const InvenstmentForm = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState();
  const [enteredExpectedInterest, setExpectedInterest] = useState();
  const [enteredInvestmentDuration, setInvestmentDuration] = useState();
  const [enteredYearlyContribution, setYearlyContribution] = useState();
  const [isCurrentSavingsValid, setIsCurrentSavingsValid] = useState(true);
  const [isExpectedInterestValid, setIsExpectedInterestValid] = useState(true);
  const [isInvestmentDurationValid, setIsInvestmentDurationValid] = useState(true);
  const [isYearlyContributionValid, setIsYearlySavingsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    
    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlyContribution: enteredYearlyContribution,
      expectedReturn: enteredExpectedInterest,
      duration: enteredInvestmentDuration,
    };
    console.log(investmentData);
    props.onSaveInvestmentData(investmentData);
    // setCurrentSavings("");
    // setYearlyContribution("");
    // setExpectedInterest("");
    // setInvestmentDuration("");
  };


  const resetButtonHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedInterest("");
    setInvestmentDuration("");
    setIsCurrentSavingsValid(true);
    setIsYearlySavingsValid(true);
    setIsInvestmentDurationValid(true);
    setIsExpectedInterestValid(true);
  };
  const currentSavingsChangeHandler = (data) => {
    setCurrentSavings(data);
  }
  const yearlyContributionChangeHandler = (data) => {
    setYearlyContribution(data);
  }
  const ExpectedInterestChangeHandler = (data) => {
    setExpectedInterest(data);
  }
  const InvestmentDurationChangeHandler = (data) => {
    setInvestmentDuration(data);
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <CurrentSavingsInput onChangeCurrentSavings={currentSavingsChangeHandler}></CurrentSavingsInput>
        <YearlyContributionInput onChangeYearlyContribution={yearlyContributionChangeHandler}></YearlyContributionInput>
      </div>
      <div className={styles["input-group"]}>
        <ExpectedInterestInput onChangeExpectedInterest={ExpectedInterestChangeHandler}></ExpectedInterestInput>
        <InvestmentDurationInput onChangeInvestmentDuration={InvestmentDurationChangeHandler}></InvestmentDurationInput>
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
