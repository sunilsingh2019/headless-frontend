import React from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import BlogArea from './BlogArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Blog" subtitle="Blog" />
      <BlogArea />
      <Footer />
    </>
  );
};

export default index;