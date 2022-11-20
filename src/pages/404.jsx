import Link from 'next/link';
import client from '../apollo/client';
import Breadcrumb from '../components/layout/Breadcrumb';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { GET_MENUS } from '../queries/get-menus';

function Error404({ data }) {
  const { headerMenus, footerMenus, headerLogo, footer, footerDown } = data || {};
  return (
    <>

      <Header headerLogo={headerLogo} headerMenus={headerMenus?.edges} footer={footer} />
      <Breadcrumb title="PAGE NOT FOUND" subtitle="404" />

      <div className="error-area pt-100 pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="error-contant text-center">
                <div className="error-image w-img">
                  <img src="assets/img/about/404-img.png" alt="404 img" />
                </div>
                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted. </p>
                <h4 className="error-title mt-60"><b>Something</b> Missing... <Link href="/">GO BACK</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footerDown={footerDown} footer={footer} footerMenus={footerMenus?.edges} />
    </>
  );
}

export default Error404;

export async function getStaticProps() {

  const { data } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: data || {}
    },
  };
}