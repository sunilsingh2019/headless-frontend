import React from 'react';
import FooterBottom from './footerBottom';
import FooterTop from './footerTop';
import Nav from './nav';

const Footer = ({ footerMenus, footerDown, footer }) => {
  return (
    <>
      <footer>
        <div className="footer__area ">
          <div className="footer__top">
            <div className="container">
              <div className="footer__top-inner">
                <div className="row ">
                  <FooterTop footer={footer} />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <Nav footerMenus={footerMenus} />
                </div>
              </div>
            </div>
          </div>
          <FooterBottom footerDown={footerDown} />
        </div>
      </footer>
    </>
  );
};

export default Footer;