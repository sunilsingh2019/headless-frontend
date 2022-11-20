import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ContactArea from './ContactArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="CONTACT US" subtitle="Contact Us" />
      <ContactArea />
      <Footer />
    </>
  );
};

export default index;