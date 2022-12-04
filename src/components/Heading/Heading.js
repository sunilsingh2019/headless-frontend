import React from "react";
import { getFontSizeForHeading, getTextAlign } from "../../utils/fonts";
export const Heading = ({ textAlign, content, level }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `services-d-title mb-25 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return (
    <div className="services-details-area pt-50 pb-5">
        <div className="container">
           {tag}
        </div>
    </div>
  );
};
