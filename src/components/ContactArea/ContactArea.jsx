import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactArea = ({
  formid,   
  email,
  facebook,
  form_blurb,
  form_heading ,
  instagram,
  linkedin,
  phone,
  twitter
}) => {


  
  const [state, handleSubmit] = useForm(`"${formid}"`);
  if (state.succeeded) {
      return (
      <div className="container pt-115 pb-120">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-photograper-cta-wrapper text-center">
              <h3 className="tp-photograper-cta-title mb-20">Thank you for contacting us</h3>
            </div>
          </div>
        </div>
      </div>
        );
  }
  return (
    <>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="tp-title">{form_heading}</h2>
                  <p>{form_blurb}</p>
                </div>
                <div className="contact__form">

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                        <input
                            id="name"
                            type="text" 
                            name="name"
                            placeholder="Your Name"
                          />
                          <ValidationError 
                            prefix="Text" 
                            field="name"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Your Email"
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input
                            id="subject"
                            type="text" 
                            name="subject"
                            placeholder="Your Subject"
                          />
                          <ValidationError 
                            prefix="Subject" 
                            field="subject"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Write  Your Message"
                          />
                          <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button type="submit" className="tp-solid-btn" disabled={state.submitting}>
                            Send your message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                {/* <div className="contact__shape">
                  <img className="contact-shape-1" src="assets/img/contact/contact-shape-1.png" alt="" />
                  <img className="contact-shape-2" src="assets/img/contact/contact-shape-2.png" alt="" />
                </div> */}
                <div className="contact__info-inner white-bg">
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="mail" viewBox="0 0 24 24">
                        <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z" />
                        <polyline className="st0" points="22,6 12,13 2,6 " />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Email us directly</h4>
                      <p><a href={`mailto:${email}`}>{email}</a></p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="call" viewBox="0 0 24 24">
                        <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z" />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Phone</h4>
                      <p><a href={`tel:${phone}`}>{phone}</a></p>
                    </div>
                  </div>
                  {/* <div className="contact__social pl-30">
                    <h4>Follow Us</h4>
                    <ul>
                      <li><a href={facebook} className="fb" ><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href={twitter} className="tw" ><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a href={linkedin} className="pin" ><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href={instagram} className="pin" ><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;