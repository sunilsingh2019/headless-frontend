import { getTextAlign } from "../../utils/fonts";
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  return (
    <>
    <div className="services-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
               <p
                className={`services-text mb-25 ${getTextAlign(textAlign)}`}
                style={{ color: textColor }}
                dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
   
  );
};