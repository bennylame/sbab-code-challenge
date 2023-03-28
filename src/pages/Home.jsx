import React from 'react';
import CalculateInterest from '../components/CalculateInterest';
import Percentage from '../assets/images/svg/Percentage.svg';

function Home() {
  return (
    <main className="max-w-[1200px] my-0 mx-auto flex flex-col items-center justify-start py-16 px-4 gap-8">
      <section className="w-full max-w-2xl flex justify-between">
        <div className="max-w-sm">
          <h1 className="lg:text-5xl text-4xl mb-4">Din räntekostnad</h1>
          <p>
            Här ser du både våra aktuella boräntor och din räntekostnad per
            månad
          </p>
        </div>
        <img className="hidden lg:block" src={Percentage} alt="Percentage" />
      </section>
      <CalculateInterest />
    </main>
  );
}

export default Home;
