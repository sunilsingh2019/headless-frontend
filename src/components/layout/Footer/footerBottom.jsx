const FooterBottom = ({ footerDown }) => {
  const getFooterBottom = footerDown?.footerBottomFieldGroup;
  console.warn('getFooterBottom', getFooterBottom);

  return (
    <>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="footer__copyright pb-2 pt-4">
                <p>{getFooterBottom?.copyrightText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tpcopyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-4 col-md-12 col-sm-12">
              <div className="ft-social d-flex justify-content-center">
                <a href={getFooterBottom?.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                <a href={getFooterBottom?.twitter}><i className="fa-brands fa-twitter"></i></a>
                <a href={getFooterBottom?.linkedin}><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;