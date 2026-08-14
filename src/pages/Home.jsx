import React from 'react';
import Hero from '../components/sections/Hero';
import IntegrationBar from '../components/sections/IntegrationBar';
import AISalesperson from '../components/sections/AISalesperson';
import RuleEngine from '../components/sections/RuleEngine';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <IntegrationBar />
      <AISalesperson />
      <RuleEngine />
      <FAQ />
    </>
  );
};

export default Home;
