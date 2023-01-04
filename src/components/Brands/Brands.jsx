import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export const Brands = ({hideTopBar = false,homeFiveBrand,brand,about,padd, brands}) => {


  var listVals = [];
      
 for (var i = 0; i < brands.list_logo; i++) {
     listVals.push( brands['list_logo_' + i + '_logo_item'])
 }
 
  return (
    <>
      <section id="brand" className={`tpbrand-area${brand ? brand : ''} 
      ${hideTopBar ? 'pt-135 pb-115' : `pt-115 pb-40 ${homeFiveBrand && 'pb-120'}`} ${about && about} ${padd && padd}`}>
        <div className="container">
          <div className="row">
            {!hideTopBar && <div className="col-xl-12">
              <div className="tp-section-title text-center mb-50">
                <span className="tp-sub-title">#Top Integration</span>
              </div>
            </div>}
          </div>
          {listVals?.length ? (
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbrand__slider-active">

                <Swiper modules={[Autoplay]}
                  spaceBetween={25}
                  slidesPerView="auto"
                  autoplay={{ delay: 4000 }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  }}
                >
                   {listVals?.map(list_logo => (
                      <SwiperSlide key={list_logo.id}>
                        <div className="tpbrand__slider-item">
                             <img src={list_logo.url} alt="brand" />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>

              </div>
            </div>
          </div>
            ) : null}
        </div>
      </section>
    </>
  );
};

