import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import PortfolioDetailsArea from './PortfolioDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="PROJECT DETAILS" subtitle="PROJECT DETAILS" />
      <PortfolioDetailsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;