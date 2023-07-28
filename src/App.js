import logo from "./assets/investment-calculator-logo.png";
import InvenstmentForm from "./components/InvestmentForm/InvestmentForm";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  let yearlyData = []; // per-year results
  const calculateHandler = (investmentData) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    

    let currentSavings = +investmentData.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +investmentData.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +investmentData.expectedReturn / 100;
    const duration = +investmentData.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    
    // do something with yearlyData ...
    yearlyData = yearlyData.map(year => {return {id: Math.random().toString(), ...year}} 
      );
    console.log(yearlyData);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvenstmentForm onSaveInvestmentData={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultTable investmentData = {yearlyData}/>
    </div>
  );
}

export default App;
