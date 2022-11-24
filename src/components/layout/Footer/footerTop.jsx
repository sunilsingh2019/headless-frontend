const FooterTop = ({ footer }) => {

  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="footer__info d-flex align-items-center">
          <div className="footer__info-icon mr-20">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
          </div>
          <div className="footer__info-content">
            <p>
              <a href="#">{footer?.footerFieldGroup?.address}</a>
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
              <a href="mailto:{footer?.email1}">{footer?.footerFieldGroup?.email1}</a>
            </p>
            <p>
              <a href="mailto:{footer?.email2}">{footer?.footerFieldGroup?.email2}</a>
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
              <a href="tel:{footer?.phone}">{footer?.footerFieldGroup?.phone}</a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop;