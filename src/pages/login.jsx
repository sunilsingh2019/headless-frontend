import { useState } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';
import { useRouter } from 'next/router';
import validateAndSanitizeLoginForm from '../utils/validator/login';
import { sanitize } from '../utils/miscellaneous';
import client from '../apollo/client';
import { GET_PAGE } from '../queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../utils/slug';
import { getPreviewRedirectUrl } from '../utils/redirects';
import Layout from '../components/layout';
import Link from 'next/link';


const Login = ({ data }) => {
  const router = useRouter();
  const [loginFields, setLoginFields] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);
    const { postType, previewPostId } = router?.query ?? {};

    // Validation and Sanitization.
    const validationResult = validateAndSanitizeLoginForm({
      username: loginFields?.username ?? '',
      password: loginFields?.password ?? '',
    });

    if (validationResult.isValid) {
      setLoading(true);
      return axios({
        data: {
          username: validationResult?.sanitizedData?.username ?? '',
          password: validationResult?.sanitizedData?.password ?? '',
        },
        method: 'post',
        url: '/api/login'
      })
        .then((data) => {
          setLoading(false);
          const { success } = data?.data ?? {};

          // If its a preview request
          if (success && postType && previewPostId) {
            const previewUrl = getPreviewRedirectUrl(postType, previewPostId);
            router.push(previewUrl);
          }
          return data?.data?.success;
        })
        .catch(() => {
          setLoading(false);
          return false;
        });
    } else {
      setClientSideError(validationResult);
    }
  };

  /**
     * Sets client side error.
     *
     * Sets error data to result received from our client side validation function,
     * and statusbar to true so that its visible to show the error.
     *
     * @param {Object} validationResult Validation Data result.
     */
  const setClientSideError = (validationResult) => {
    if (validationResult.errors.password) {
      setErrorMessage(validationResult.errors.password);
    }

    if (validationResult.errors.username) {
      setErrorMessage(validationResult.errors.username);
    }
  };

  const handleOnChange = (event) => {
    setLoginFields({ ...loginFields, [event.target.name]: event.target.value });
  };

  const { username, password } = loginFields;
  return (
    <Layout data={data}>

      <div className="sign-area pt-140 pb-140">
        <div className="container">
          <div className="sign-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <div className="sign-image w-img">
                  <img src="assets/img/about/sign-img-2.png" alt="sign-image" />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="sign-content">
                  <h5 className="sign-title mb-30"><b>Login</b> to account</h5>
                  {!isEmpty(errorMessage) && (
                    <div
                      className="text-red-600"
                      dangerouslySetInnerHTML={{ __html: sanitize(errorMessage) }}
                    />
                  )}
                  <form onSubmit={onFormSubmit}>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12">
                        <div className="sign-input">
                          <label className="sign-label mb-10">Your Email</label>
                          <input id='email' name="username"
                            value={username}
                            onChange={handleOnChange} placeholder="Your Email" />
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Password</label>
                          <input id='password' name="password"
                            value={password}
                            onChange={handleOnChange} type="password" placeholder="Your password" />
                        </div>
                      </div>
                    </div>
                    <div className="defult-sign">
                      <button type="submit" className="tp-sqbtn-active-2 w-100">Sign In</button>
                    </div>
                    {loading ? <p>Loading...</p> : null}
                    <div className="sign-line"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;

export async function getStaticProps(context) {

  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: '/',
    },
  });

  const defaultProps = {
    props: {
      data: data || {}
    },
    /**
         * Revalidate means that if a new request comes to server, then every 1 sec it will check
         * if the data is changed, if it is changed then it will update the
         * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
         */
    revalidate: 1,
  };

  return handleRedirectsAndReturnData(defaultProps, data, errors, 'page');
}