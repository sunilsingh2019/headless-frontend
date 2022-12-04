import Link from 'next/link';

export const Hero = ({heading_1, heading_2, sub_heading, title, url, target, enable_disable_module, hero_image}) => {
console.log("enable_disable_module", enable_disable_module);
   if(enable_disable_module == 1) {
    
  return (
    <div className="tppoletics-area p-relative">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tppoletics-content text-center">
              <h2 className="tppoletics-title">{heading_1}</h2>
              <h3 className="tppoletics-sd-title mb-40">{heading_2}</h3>
              <span className="tppoletics-text">{sub_heading}</span>
              <div className="tppoletics-button mt-65">
                <Link href={url} download>
                  <a target={target} className="tp-solid-btn">{title}</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tppoletics-hero">
              <img src={hero_image} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="tpbs-scroll tpbs-scroll-3">
        <a href="#bio-wrapper" className="tpbs-scroll-btn animate">
          <i className="fa-light fa-arrow-down-long"></i></a>
        <span><a href="#bio-wrapper">Scrool Down</a></span>
      </div>
    </div>
  );
}
} 
