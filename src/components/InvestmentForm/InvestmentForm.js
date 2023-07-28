import "./InvestmentForm.css";
import React, {useState} from 'react';

const InvenstmentForm = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [enteredYearlyContribution, setYearlyContribution] = useState("");
  const [enteredExpectedReturn, setExpectedReturn] = useState("");
  const [enteredDuration, setDuration] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlyContribution: enteredYearlyContribution,
      expectedReturn: enteredExpectedReturn,
      duration: enteredDuration
    }
    props.onSaveInvestmentData(investmentData);
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  }

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  }
  const yearlyContributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value);
  }
  const expectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value);
  }
  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  }

  return (
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={currentSavingsChangeHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={expectedReturnChangeHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={durationChangeHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  );
};

export default InvenstmentForm;