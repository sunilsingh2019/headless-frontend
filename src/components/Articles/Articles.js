import Link from 'next/link';

export const Articles = ({articles, heading, link}) => {
  return (
    <>
    <div className="tpevent-area grey-bg pt-140 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tpbs-section-wrapper text-center mb-30">
              <h3 className="tpbs-title">{heading}</h3>
            </div>
          </div>
        </div>
        <div className="row mt-35">
          <div className="col-xl-12">
            {
              articles.map(item => {
                return (
                  <div key={item.id} className="tpevent-item mb-40">
                    <div className="tpevent-image">
                      <img height={346} src={item.featured_img_uri} alt="event-img" />
                    </div>
                    <div className="tp-event-content">
                      <h4 className="tpevent-title mb-30">
                        <Link href={`blog${item.uri}`}>
                          <a>{item.post_title}</a>
                        </Link>
                      </h4>
                      <h6 className="tpevent-sm-title mb-30">Blog & Article  ---<span> {item.post_date}</span></h6>
                      <p>{item.post_excerpt}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tpproject-button mt-20 text-center">
              <Link href={link}>
                <a className="tp-solid-btn">Read More Blog & Article</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
   
   
  );
};

