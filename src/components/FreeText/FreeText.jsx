import React from 'react';
import { relativeToAbsoluteUrls } from '../../utils/relativeToAbsoluteUrls';
export const FreeText = ({heading, blurb}) => {
    return (
         <>
        <div className="services-details-area pt-140 pb-105">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h4 className="services-d-title mb-25">{heading}</h4>
                <p
                className={`services-text mb-25 `}
                dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(blurb) }}
              />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

