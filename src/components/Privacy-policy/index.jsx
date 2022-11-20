import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import PrivacyContent from './PrivacyContent';


const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="PRIVACY & POLICY" subtitle="PRIVACY & POLICY" />
      <PrivacyContent/>
      <FooterTwo/>
    </>
  );
};

export default index;