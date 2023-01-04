import React from 'react';
import { relativeToAbsoluteUrls } from '../../utils/relativeToAbsoluteUrls';
export const HomeIntro = ({blurb, heading_cta, heading, blurb_cta, listItems, heroImages, icon, enable_disable_module}) => {

  
 var listVals = [];
      
 for (var i = 0; i < listItems.list; i++) {
     listVals.push( listItems['list_' + i + '_item'])
 }

 var heroImgVal = [];
      
 for (var i = 0; i < heroImages.hero_image; i++) {
  heroImgVal.push( heroImages['hero_image_' + i + '_image'])
 }
 if(enable_disable_module == 1) {
console.log("heroImgVal", heroImgVal);
  return (
    <>
    <div id="bio-wrapper" className="bio-wrapper grey-bg pt-190">
      <div className="container-fluid">
        {/* biograpy-area start */}
        <div className="biograpy-area pt-80 pb-70 white-bg">
          <div className="container">
          {heroImgVal?.length ? (
            <div className="row">
              {heroImgVal?.map(img => (
              <div key={img.id} className="col-xl-6 col-lg-6">
                <div className="biograpy-image mb-60">
                  <img src={img?.url} alt={img?.title} />
                </div>
              </div>
              ))}
            </div>
             ) : null}
            <h4 className="biograpy-title mb-40">{heading}</h4>
            <div
                className={`bio-text mb-35 `}
                dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(blurb) }}
              />
            <div className="row mb-20">
              <div className="col-xxl-12 col-xl-12">
              {listVals?.length ? (
                <div className="row">
                 {listVals?.map(list => (
                  <div key={list.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="features__list mb-10">
                      <ul>
                        <li className="d-flex align-items-center">
                          <div className="features__list-icon mr-10">
                            <i className="far fa-check"></i>
                          </div>
                          <div className="features__list-text">
                            <p>{list}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  ))}
                </div>
                 ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* biograpy-area end */}

        {/* vote-area start  */}
        <div className="vote-area border-top grey-bg pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="vote-content text-center">
                  <div className="flag-img mb-35">
                    <img src={icon.url} alt={icon?.title} />
                  </div>
                  <h4 className="vote-title mb-35">{heading_cta}</h4>
                  <h5 className="vote-sm-title">{blurb_cta}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* vote-area end  */}
      </div>
    </div>
  </>
  );
}
}