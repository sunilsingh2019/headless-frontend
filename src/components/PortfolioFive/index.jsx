import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import PortfolioFour from '../layout/Portfolio/PortfolioFour';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="05 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioFour padd="pt-115 pb-130"/>
      <FooterTwo/>
    </>
  );
};

export default index;