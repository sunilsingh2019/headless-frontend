import React from 'react';
// test
const AboutMeArea = ({email, phone, experience, expertise, profile_image, name, position, facebook, twitter, linkedin, instagram}) => {
  return (
    <>
      <div className="aboutme-area pt-140 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img src={profile_image.url} alt={profile_image.alt} />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50"><b>{name}</b></h3>
                  <span className="aboutme-sub-title">{position}</span>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li><p>Expertise:<a href="#">{expertise}</a></p></li>
                    <li><p>Experience:<a href="#">{ experience }</a></p></li>
                    <li><p>E-mail:<a href={`mailto:${email}`}> {email}</a></p></li>
                    <li><p>Phone:<a href={`tel:${phone}`}> {phone}</a></p></li>
                  </ul>
                </div>
                <div className="aboutme-social mt-40">
                <a target="_blank" href={linkedin}><i className="fab fa-linkedin"></i></a>
                  <a target="_blank" href={facebook}><i className="fab fa-facebook-f"></i></a>
                  <a target="_blank" href={instagram}><i className="fab fa-instagram"></i></a>
                  <a target="_blank" href={twitter}><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeArea;