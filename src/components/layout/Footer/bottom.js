const Bottom = ({footerDown}) => {
   const footerBottoms = footerDown?.footerBottomFieldGroup;
  return (
    <>
      <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="footer__copyright pb-2 pt-4">
                    <p>{footerBottoms?.copyrightText}</p>
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
                    <a href="{footerBottoms?.facebook}"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="{footerBottoms?.twitter}"><i className="fa-brands fa-twitter"></i></a>
                    <a href="{footerBottoms?.linkedin}"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Bottom;