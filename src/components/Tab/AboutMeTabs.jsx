import Link from 'next/link';
import { CircularProgressbar } from "react-circular-progressbar";

import awardData from '../../data/awardsData';

const certificationData = [
  {
    id: 1,
    icon: 'assets/img/experience/edu-icon-1.png',
    title: '2018 CAL-ABOTA Trial Designer Of The Year'
  },
  {
    id: 2,
    icon: 'assets/img/experience/edu-icon-2.png',
    title: '2017 Trial Computer science of the Year'
  },
  {
    id: 3,
    icon: 'assets/img/experience/edu-icon-3.png',
    title: 'Martindale-Hubbell AV Rated In The'
  },
  {
    id: 4,
    icon: 'assets/img/experience/edu-icon-4.png',
    title: 'Super Designer’ Top 100 Designer in California'
  },
]

const experienceData = [
  {
    id: 1,
    img: 'assets/img/experience/experience-img-1.png',
    title: 'Sr. Front-end Engineer - Zlitemes',
    date: '2005 - 2008',
  },
  {
    id: 2,
    img: 'assets/img/experience/experience-img-2.png',
    title: 'Front-end Engineer - TheFlow',
    date: '2008 - 2010',
  },
  {
    id: 3,
    img: 'assets/img/experience/experience-img-3.png',
    title: 'Software Engineer - Stacker',
    date: '2010 - 2015',
  },
  {
    id: 4,
    img: 'assets/img/experience/experience-img-4.png',
    title: 'Product Designer at GooDaddy',
    date: '2015 - Figwire',
  },
]

const AboutMeTabs = ({TabData}) => {
 
 //first loop 
 const number = TabData.tab;
 const table = [...Array(number)];

 const number2 = TabData.tab_1_two_column_cards;
  const table2 = [...Array(number2)];

 var slugify = require('slugify')
  const slugifyOptions = {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true,      // convert to lower case, defaults to `false`
    strict: false,     // strip special characters except replacement, defaults to `false`
    locale: 'vi',       // language code of the locale to use
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
  }

  return (
    <>
      <div className="aboutme-tabs-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs ab-tabs" id="myTab" role="tablist">
              {table.map((_, index) => {
                const tabTitle = `tab_${index}_tab_heading`;
                
                return (
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ab-tab-item ${index===0 ? 'active' : ''}`} id={`${slugify(TabData[tabTitle], slugifyOptions)}-tab`} data-bs-toggle="tab" data-bs-target={`#${slugify(TabData[tabTitle], slugifyOptions)}`} type="button" role="tab" aria-controls={slugify(TabData[tabTitle],slugifyOptions)} aria-selected="true">{TabData[tabTitle]}</button>
                </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="tab-content mt-30" id="myTabContent">
            
            {table.map((_, index) => {
              // second loop
              const tabTitle = `tab_${index}_tab_heading`;
              const tabContentBlockHeading = `tab_${index}_content_block_heading`;
              const tabContentBlock = `tab_${index}_content_block`;
              
              return (
              <div className={`tab-pane fade ${index===0 ? 'active show' : ''}`} id={`${slugify(TabData[tabTitle], slugifyOptions)}`} role="tabpanel" aria-labelledby={`${slugify(TabData[tabTitle], slugifyOptions)}-tab`}>
               <h4 className="tab-pane-title mb-20">{TabData[tabContentBlockHeading]}</h4>
                <p className="desc">{TabData[tabContentBlock]}</p>
                {/* two column card */}
                <div className="row mt-70">
                    {table.map((_, index) => {
                      const tabTwoColumnCardsHeading = `tab_1_two_column_cards_${index}_heading`;
                      const tabTwoColumnCardsBlurb = `tab_1_two_column_cards_${index}_blurb`;
                      const tabTwoColumnCardsPosition = `tab_1_two_column_cards_${index}_position`;
                      const tabTwoColumnCardsYear = `tab_1_two_column_cards_${index}_year`;
                
                      return (
                        <div key={index} className="col-xl-6 cl-lg-6">
                          <div className="experience-sm-item mb-40">
                            {/* <div className="experience-company-image mb-40">
                              <img src={TabData[tabTwoColumnCardsLogo]} alt="sdf" />
                            </div> */}
                            <h5 className="experience-title"><a>{TabData[tabTwoColumnCardsHeading]}</a></h5>
                            <h5 className="experience-title"><a>{TabData[tabTwoColumnCardsPosition]}</a></h5>
                            <span className="exp-duration mb-20">{TabData[tabTwoColumnCardsYear]}</span>
                            <p>{TabData[tabTwoColumnCardsBlurb]}</p>
                          </div>
                        </div>
                      );
                  })}
                </div>
                {/* four column  */}
                <div className="row mt-50">
                  {
                    certificationData.map(item => (
                      <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="edu-exp-item mb-30">
                          <div className="edu-exp-image mb-10">
                            <img src={item.icon} alt="edu-exp-icon" />
                          </div>
                          <h5 className="edu-exp-title mb-15"><a>{item.title}</a></h5>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </p>
                        </div>
                      </div>
                    ))
                  }

                </div>
                {/* skills progress bar */}
                <h4 className="tab-pane-title mt-40"><b>Main</b> Skills</h4>
                <div className="experience-list mt-70">
                  <div className="row  row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="experience-item text-center mb-50">
                        <div className="progress-circular tl-progress mb-30">
                          <div style={{ width: 135, height: 135 }}>
                            <CircularProgressbar value={90} text={'90%'} />
                          </div>
                        </div>
                        <h5 className="skill-item-title">PHOTOSHOP</h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="experience-item text-center mb-50">
                        <div className="progress-circular tl-progress mb-30">
                          <div style={{ width: 135, height: 135 }}>
                            <CircularProgressbar value={61} text={'61%'} />
                          </div>
                        </div>
                        <h5 className="skill-item-title">ILLUSTRATOR</h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="experience-item text-center mb-50">
                        <div className="progress-circular tl-progress mb-30">
                          <div style={{ width: 135, height: 135 }}>
                            <CircularProgressbar value={50} text={'50%'} />
                          </div>
                        </div>
                        <h5 className="skill-item-title">ADOBE XD</h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="experience-item text-center mb-50">
                        <div className="progress-circular tl-progress mb-30">
                          <div style={{ width: 135, height: 135 }}>
                            <CircularProgressbar value={67} text={'67%'} />
                          </div>
                        </div>
                        <h5 className="skill-item-title">FIGMA</h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="experience-item text-center mb-50">
                        <div className="progress-circular tl-progress mb-30">
                          <div style={{ width: 135, height: 135 }}>
                            <CircularProgressbar value={58} text={'58%'} />
                          </div>
                        </div>
                        <h5 className="skill-item-title">SKATCH</h5>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeTabs;