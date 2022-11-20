import React from 'react';
import BrandArea from '../layout/BrandArea';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import FaqArea from './FaqArea';
import FaqGetInTouch from './FaqGetInTouch';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="FAQ" subtitle="Ask Question" />
      <FaqArea/>
      <FaqGetInTouch/>
      <BrandArea padd="faq-brand"/>
      <FooterTwo/>
    </>
  );
};

export default index;