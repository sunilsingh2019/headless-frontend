import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import FooterTwo from '../layout/Footers/FooterTwo';
import Header from '../layout/Header';
import BlogArea from './BlogArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Blog" subtitle="Blog" />
      <BlogArea/>
      <FooterTwo/>
    </>
  );
};

export default index;