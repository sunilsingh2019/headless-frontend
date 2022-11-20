import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import AboutMeArea from './AboutMeArea';
import AboutMeTabs from './AboutMeTabs';
import GetInTouch from './GetInTouch';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="ABOUT ME" subtitle="ABOUT ME" />
      <AboutMeArea/>
      <AboutMeTabs/>
      <GetInTouch/>
      <Footer/>
    </>
  );
};

export default index;