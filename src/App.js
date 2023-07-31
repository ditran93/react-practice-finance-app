import InvenstmentForm from "./components/InvestmentForm/InvestmentForm";
import ResultTable from "./components/ResultTable/ResultTable";
import Header from "./components/Header/Header";
import React, { useState } from "react";

function App() {
  const [formatedData, setFormatedData] = useState([]);
  let yearlyData = []; // per-year results
  const calculateHandler = (investmentData) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +investmentData.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +investmentData.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +investmentData.expectedReturn / 100;
    const duration = +investmentData.duration;
    let totalInterestGain = 0;
    let totalInvestedCapital = currentSavings;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest =
        Math.round(currentSavings * expectedReturn * 100) / 100;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterestGain += yearlyInterest;
      totalInvestedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterestGain,
        investedCapital: totalInvestedCapital,
      });
    }

    // do something with yearlyData ...
    yearlyData = yearlyData.map((year) => {
      return { id: Math.random().toString(), ...year };
    });
    console.log(yearlyData);
    setFormatedData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvenstmentForm onSaveInvestmentData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {formatedData.length ? (
        <ResultTable investmentData={formatedData} />
      ) : (
        <h1>No data is available</h1>
      )}
    </div>
  );
}

export default App;
