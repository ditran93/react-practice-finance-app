import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import ResultTable from "./components/ResultTable/ResultTable";
import React, { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState();
  const calculateHandler = (data) => {
    setUserInput(data);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm calculateUserInput={calculateHandler}></InvestmentForm>
      {!userInput && <p style={{textAlign: 'center'}}>No Data Found</p>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput["current-savings"]}></ResultTable>}
    </div>
  );
}

export default App;
