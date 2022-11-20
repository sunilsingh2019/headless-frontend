import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import PrivacyContent from './PrivacyContent';
import SearchArea from './SearchArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="HELP CENTER" subtitle="Help Center" />
      <SearchArea/>
      <PrivacyContent/>
      <FooterTwo/>
    </>
  );
};

export default index;