const Top = ({footer}) => {
  const getFooterTop = footer?.footerFieldGroup;
  return (
    <div className="row ">
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div className="footer__info d-flex align-items-center">
        <div className="footer__info-icon mr-20">
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
        </div>
        <div className="footer__info-content">
          <p>
            <a href="{getFooterTop?.address}">{getFooterTop?.address}</a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-md-center">
      <div className="footer__info d-flex align-items-center">
        <div className="footer__info-icon mr-20">
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
        <div className="footer__info-content">
          <p>
            <a href="mailto:>{getFooterTop?.email1}">{getFooterTop?.email1}</a>
          </p>
          <p>
            <a href="mailto:{getFooterTop?.email2}">{getFooterTop?.email2}</a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-lg-end">
      <div className="footer__info d-flex align-items-center">
        <div className="footer__info-icon mr-20">
          <span>
            <i className="fa-solid fa-phone-flip"></i>
          </span>
        </div>
        <div className="footer__info-content">
          <p>
            <a href="tel:{getFooterTop?.phone}">{getFooterTop?.phone}</a>
          </p>

        </div>
      </div>
    </div>
  </div>
  );
}

export default Top;