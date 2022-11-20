import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import BlogDetailsArea from './BlogDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;