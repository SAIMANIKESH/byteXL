import React from "react";

import { WeatherModule, CurrencyConverter, QuoteGenerator } from "../components";

const Home = () => {
  return (
    <div className="flex-col bg-red-200">
      <h2 className="text-3xl text-center md:text-5xl font-bold text-slate-800">
        Home Page
      </h2>
      <section className="w-full flex flex-col items-center justify-center gap-12 py-24 lg:flex-row">
        <WeatherModule />
        <CurrencyConverter />
        <QuoteGenerator />
      </section>
    </div>
  );
};

export default Home;
