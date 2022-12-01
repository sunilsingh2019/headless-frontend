

import React from "react";
import { getFontSizeForHeading, getTextAlign } from "../../utils/fonts";
export const Heading = ({ textAlign, content, level }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};

// const Heading = ({}) => {
//   return (
//     <div className="container">
//     <div className="col-xl-12">
//       <div className="tp-photograper-portfolio-wrapper text-center">
//         <h2 className="tp-photograper-portfolio-title">HILLEXA</h2>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default Heading;
