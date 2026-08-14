import React from 'react';
import Hero from '../components/sections/Hero';
import IntegrationBar from '../components/sections/IntegrationBar';
import AISalesperson from '../components/sections/AISalesperson';
import RuleEngine from '../components/sections/RuleEngine';

const Home = () => {
  return (
    <>
      <Hero />
      <IntegrationBar />
      <AISalesperson />
      <RuleEngine />
    </>
  );
};

export default Home;
