import React from 'react';
import Bottom from './bottom';
import Navigation from './navigation';
import Top from './top';


const footer = ({ footerMenus, footerDown, footer }) => {
  return (
    <>
      <footer>
        <div className="footer__area ">
          <div className="footer__top">
            <div className="container">
              <div className="footer__top-inner">
                <Top footer={footer}/>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <Navigation footerMenus={footerMenus}/>
                </div>
              </div>
            </div>
          </div>
          <Bottom footerDown={footerDown}/>
        </div>
      </footer>
    </>
  );
};

export default footer;