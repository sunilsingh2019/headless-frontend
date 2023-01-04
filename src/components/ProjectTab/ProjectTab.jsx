import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


export const ProjectTab = ({ padd, projects }) => {
  return (
    <>
    <div className="project-list-area pt-140 pb-130">
      <div className="container">
        <div className="row">
          {
            projects.map(item => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tpproject-2 tpproject-3 mb-30">
                  <div className="tpproject-2-thumbnail" style={{ backgroundImage: `url(${item.featured_img_uri})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                  <div className="tpproject-2-text">
                    <h5 className="tpproject-2-title">
                      <Link href={`project${item.uri}`}>
                        <a>{item.post_title}</a>
                      </Link>
                    </h5>
                    <div className="tpproject-btn mt-25 mb-10">
                      <Link href={`project${item.uri}`}>
                        <a>
                          <i className="flaticon-right-arrow-1"></i>
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
};

