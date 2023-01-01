import Link from 'next/link';

export const Service = ({heading, sub_heading, select_services}) => {
console.log('select_services', select_services)
  return (
    <>
    <div className="tpservices-area pt-140 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title text-center">
              <span className="tp-sub-title mb-15">{ sub_heading }</span>
              <h2 className="tp-title">{ heading }</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            select_services.map(item => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="tpservices tpservices-3 text-center mb-30">
                  <div className="tpservices__icon mb-30">
                    <i className={item?.custom_field?.icon_class}></i>
                  </div>
                  <div className="tpservices__content">
                    <h4 className="tpservices__title mb-25">
                      <Link href={`/service/${item?.uri}`}>
                        <a>{item.post_title}</a>
                      </Link>
                    </h4>
                    <div className="tpservices__btn mt-30">
                      <Link href={`/service/${item?.uri}`}>
                        <a>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  </>
   
  );
}