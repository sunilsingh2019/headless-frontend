import React from 'react';
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';

export const FormsPree = ({form_id, heading, background_color}) => {

const [state, handleSubmit] = useForm(form_id);
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
      <div className={`getin-touch-area-2  pt-130 pb-140 ${ background_color == 1 ? 'grey-bg' : ''} `}>
        <div className="container">
          <h5 className="services-sm-title">{heading}</h5>
          <div className="row mt-55">
            <div className="col-xl-12">
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
                            prefix="Name" 
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
                        <button className="tp-solid-btn" type="submit" disabled={state.submitting}>
                        Send your message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

