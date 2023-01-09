import React from 'react';
import { relativeToAbsoluteUrls } from '../../utils/relativeToAbsoluteUrls';

export const Step = ({heading, blurb, step}) => {
     //first loop
  const number = step.four_step;
  const table = [...Array(number)];
  return (
    <>
      <div className="services-details-area pt-140 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h5 className="services-sm-title mb-25">{heading}</h5>
              <p>{blurb}
              </p>
              <div className="row mt-70">
              {table.map((_, index) => {
                const fourStepHeading = `four_step_${index}_heading`;
                const fourStepNumber = `four_step_${index}_number`;
                const fourStepBlurb = `four_step_${index}_blurb`;
                return (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">{step[fourStepNumber]}</span>
                    </div>
                    <h6 className="step-title mt-40">{step[fourStepHeading]}</h6>
                    <p
                        className={`services-text mb-25 `}
                        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(step[fourStepBlurb]) }}
                    />
                    <div className="step-item-shape shape-1">
                      <img src="../../assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

