import React from 'react';
import BrandArea from '../layout/BrandArea';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import ServiceContact from './ServiceContact';
import ServiceDetailsArea from './ServiceDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details" />
      <ServiceDetailsArea/>
      <ServiceContact/>
      <BrandArea padd="services-padd" />
      <FooterTwo/>
    </>
  );
};

export default index;