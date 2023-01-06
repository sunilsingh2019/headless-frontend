import { CircularProgressbar } from "react-circular-progressbar";

const AboutMeTabs = ({ TabData }) => {

  console.warn("TabData", TabData);

  //first loop
  const number = TabData.tab;
  const table = [...Array(number)];

  var slugify = require("slugify");
  const slugifyOptions = {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  };

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
                      <button
                        className={`nav-link ab-tab-item ${
                          index === 0 ? "active" : ""
                        }`}
                        id={`${slugify(TabData[tabTitle], slugifyOptions)}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${slugify(
                          TabData[tabTitle],
                          slugifyOptions
                        )}`}
                        type="button"
                        role="tab"
                        aria-controls={slugify(
                          TabData[tabTitle],
                          slugifyOptions
                        )}
                        aria-selected="true"
                      >
                        {TabData[tabTitle]}
                      </button>
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
                <div
                  className={`tab-pane fade ${
                    index === 0 ? "active show" : ""
                  }`}
                  id={`${slugify(TabData[tabTitle], slugifyOptions)}`}
                  role="tabpanel"
                  aria-labelledby={`${slugify(
                    TabData[tabTitle],
                    slugifyOptions
                  )}-tab`}
                >
                  <h4 className="tab-pane-title mb-20">
                    {TabData[tabContentBlockHeading]}
                  </h4>
                  <p className="desc">{TabData[tabContentBlock]}</p>
                  {/* two column card */}
                  {index === 0 ? (
                     <>
                     <h4 className="tab-pane-title mt-40">
                       <b>Main</b> Skills
                     </h4>
                     <div className="experience-list mt-70">
                       <div className="row  row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                       {table.map((_, index) => {
                          // second loop
                          const tabSkillsCounterPercent = `tab_0_skills_counter_${index}_percent`;
                          const tabSkillsCounterTechnology = `tab_0_skills_counter_${index}_technology`;
                          return (
                         <div className="col">
                           <div className="experience-item text-center mb-50">
                             <div className="progress-circular tl-progress mb-30">
                               <div style={{ width: 135, height: 135 }}>
                                 <CircularProgressbar
                                   value={TabData[tabSkillsCounterPercent]}
                                   text={`${TabData[tabSkillsCounterPercent]}%`}
                                 />
                               </div>
                             </div>
                             <h5 className="skill-item-title">{TabData[tabSkillsCounterTechnology]}</h5>
                           </div>
                         </div>
                        );
                        })}
                       </div>
                     </div>
                   </>
                   
                  ) : null}
                  {/* Two column  */}
                  {index === 1 ? (
                     <div className="row mt-70">
                     {table.map((_, index) => {
                       const tabTwoColumnCardsHeading = `tab_1_two_column_cards_${index}_heading`;
                       const tabTwoColumnCardsBlurb = `tab_1_two_column_cards_${index}_blurb`;
                       const tabTwoColumnCardsPosition = `tab_1_two_column_cards_${index}_position`;
                       const tabTwoColumnCardsYear = `tab_1_two_column_cards_${index}_year`;

                       return (
                         <div key={index} className="col-xl-6 cl-lg-6">
                           <div className="experience-sm-item mb-40">
                             <h5 className="experience-title">
                               <a>{TabData[tabTwoColumnCardsHeading]}</a>
                             </h5>
                             <h5 className="experience-title">
                               <a>{TabData[tabTwoColumnCardsPosition]}</a>
                             </h5>
                             <span className="exp-duration mb-20">
                               {TabData[tabTwoColumnCardsYear]}
                             </span>
                             <p>{TabData[tabTwoColumnCardsBlurb]}</p>
                           </div>
                         </div>
                       );
                     })}
                   </div>
                  ) : null}
                  {index === 2 ? (
                   <div className="row mt-50">
                    {table.map((_, index) => {
                       const tabFourColumnCardsHeading = `tab_2_four_column_cards_${index}_heading`;
                       const tabFourColumnCardsBlurb = `tab_2_four_column_cards_${index}_blurb`;
                       return (
                     <div
                       key={index}
                       className="col-xl-3 col-lg-3 col-md-6"
                     >
                       <div className="edu-exp-item mb-30">
                         <h5 className="edu-exp-title mb-15">
                           <a>{TabData[tabFourColumnCardsHeading]}</a>
                         </h5>
                         <p>
                         {TabData[tabFourColumnCardsBlurb]}
                         </p>
                       </div>
                     </div>
                   );
                  })}
                 </div>
                ) : null}
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

