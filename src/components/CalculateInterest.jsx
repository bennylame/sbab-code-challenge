import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import HeadingWithDivider from './HeadingWithDivider';
import Compare from '../assets/images/svg/Compare.svg';

function CalculateInterest() {
  const [loanSum, setLoanSum] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [mortgageRates, setMortgageRates] = React.useState([]);
  const [monthlyPayment, setMonthlyPayment] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(true);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (mortgageRates.length > 0) return;
    fetchMortgageRates();
    setIsLoading(true);
  }, []);

  React.useEffect(() => {
    if (mortgageRates.length === 0) return;
    if (interestRate === 0) setInterestRate(mortgageRates[0].value);
    calculateMonthlyPayment();
  }, [loanSum, interestRate, mortgageRates]);

  const fetchMortgageRates = async () => {
    const url = 'https://developer.sbab.se';
    const endpoint = `/sandbox/api/interest-rates/2.0/mortgage-rates`;
    const requestUrl = `${url}${endpoint}`;

    const response = await fetch(new URL(requestUrl));
    const data = await response.json();
    setMortgageRates(
      Object.entries(data.mortgage_rates).map(([key]) => {
        return {
          label: `${data.mortgage_rates[key].binding_period_in_months} mån - ${data.mortgage_rates[key].mortgage_rate}%`,
          value: data.mortgage_rates[key].mortgage_rate,
        };
      })
    );
    setIsLoading(false);
  };

  const handleInputChange = () => {
    setLoanSum(inputRef.current.value);
  };

  const handleSelectChange = (e) => {
    setInterestRate(e.target.value);
  };

  const calculateMonthlyPayment = () => {
    if (loanSum === 0) return;
    const monthlyPayment = Math.round(loanSum * ((interestRate * 0.01) / 12));
    setMonthlyPayment(monthlyPayment);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className="w-full max-w-2xl flex flex-col gap-4">
        <HeadingWithDivider label="Få fram din räntekostnad direkt" />
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault}
        >
          <Input
            type="text"
            id="loan-sum"
            name="loan-sum"
            placeholder="ex. 2 000 000"
            label="Önskat lånebelopp"
            onChange={handleInputChange}
            ref={inputRef}
          />
          <Select
            id="mortgage-rates-select"
            name="mortgage-rates"
            options={mortgageRates}
            label="Välj bindningstid"
            onChange={handleSelectChange}
          />
        </form>
      </section>
      <section className="w-full max-w-2xl flex flex-col gap-4">
        <HeadingWithDivider label={`Din räntekostnad –⁠ ${interestRate}%`} />
        <div className="flex flex-col items-center lg:items-start lg:justify-start lg:flex-row gap-4">
          <img className="max-w-fit" src={Compare} alt="Percentage" />
          <h1 className="text-5xl">{monthlyPayment} kr/mån</h1>
          <p>{interestRate}</p>
        </div>
      </section>
    </>
  );
}

export default CalculateInterest;
