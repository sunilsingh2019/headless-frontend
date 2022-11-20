import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import PortfolioArea from './PortfolioArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="01 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioArea/>
      <FooterTwo/>
    </>
  );
};

export default index;