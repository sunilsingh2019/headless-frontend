import React from 'react';
import BrandArea from '../layout/BrandArea';
import Breadcrumb from '../layout/Breadcrumb';
import Cta from '../layout/Cta';
import Header from '../layout/Header';
import BlogArea from '../Home/BlogArea';
import Testimonial from '../Home/Testimonial';
import ServicesBanner from './ServicesBanner';
import ServicesList from './ServicesList';
import Footer from '../layout/Footer';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="01 - OUR SERVICES" subtitle="Services" />
      <ServicesList />
      <ServicesBanner />
      <Testimonial padd="services-padd" />
      <Cta padd="services-padd-cta" />
      <BlogArea padd="services-blog-padd" />
      <BrandArea padd="services-brand" />
      <Footer />
    </>
  );
};

export default index;