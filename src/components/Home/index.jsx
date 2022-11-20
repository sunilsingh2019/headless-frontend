import React from 'react';
import FooterFour from '../layout/Footers/FooterFour';
import Header from '../layout/Header';
import BioArea from './BioArea';
import BlogThirteen from './BlogThirteen';
import EventArea from './EventArea';
import HeroAreaThirteen from './HeroAreaThirteen';
import PortfolioThirteen from './PortfolioThirteen';
import ServicesThirteen from './ServicesThirteen';
import TestimonialThirteen from './TestimonialThirteen';

const index = ({headerMenus}) => {
  return (
    <>
      <Header headerMenus={headerMenus}/>
      <HeroAreaThirteen/>
      <BioArea/>
      <ServicesThirteen/>
      <PortfolioThirteen/>
      <EventArea/>
      <TestimonialThirteen/>
      <BlogThirteen/>
      <FooterFour/>
    </>
  );
};

export default index;