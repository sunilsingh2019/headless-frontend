// import Head from "next/head";
// import GetHead from "../getHead";
// import Seo from "../seo";
// import Footer from "./Footer";
// import Header from "./Header";


// const Layout = ({ data, children }) => {
//   // const headerMenus = data?.menus?.headerMenus;
//   // const headerLogo = data?.logo?.headerLogo?.logo;
//   // const footerMenus = data?.menus?.footerMenus;
//   // const footerDown = data?.footerBottom?.footerDown;
//   // const footer = data?.footerTop?.footer;
//   // const siteTitle = data?.siteHeader?.siteTitle;
//   // const favIcon = data?.favIcons?.favIcon;
//   // const page = data?.page?.seo;
//   // const url = data?.page?.uri;
//   const { headerLogo, footer, headerMenus, footerMenus, footerDown, favIcon, siteTitle, page, url } = data || {};
//   // const {page, post, posts, header, footer, headerMenus, footerMenus} = data || {};

//   return (
//     <>
//       <GetHead siteTitle={siteTitle} favIcon={favIcon} />
//       <Seo seo={page?.seo} uri={url?.uri} />
//       <Header headerLogo={headerLogo} headerMenus={headerMenus?.edges} footer={footer} />
//       {children}
//       <Footer footerDown={footerDown} footerMenus={footerMenus?.edges} footer={footer} />
//     </>
//   );
// }


// export default Layout;

import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import GetHead from "../getHead";
import Seo from '../seo';
import { isEmpty } from 'lodash';
import { sanitize } from '../../utils/miscellaneous';
import PropTypes from 'prop-types';

const Layout = ({ data, isPost, children }) => {
  const { headerLogo, page, post, posts, header, footer, headerMenus, footerMenus, footerDown, favIcon, siteTitle, } = data || {};

  // If it does not have either post or page.
  if (isEmpty(page) && isEmpty(post) && isEmpty(posts)) {
    return null;
  }

  const seo = isPost ? (post?.seo ?? {}) : (page?.seo ?? {});
  const uri = isPost ? (post?.uri ?? {}) : (page?.uri ?? {});

  return (
    <div>
      <GetHead siteTitle={siteTitle} favIcon={favIcon} />
      <Seo seo={seo} uri={uri} />
      <Head>
        <link rel="shortcut icon" href={header?.favicon} />
        {seo?.schemaDetails ? (
          <script
            type='application/ld+json'
            className='yoast-schema-graph'
            key='yoastSchema'
            dangerouslySetInnerHTML={{ __html: sanitize(seo.schemaDetails) }}
          />
        ) : null}
      </Head>
      <Header headerLogo={headerLogo} header={header} headerMenus={headerMenus?.edges} footer={footer} />
      <div className="md:container px-5 py-24 mx-auto min-h-almost-screen">
        {children}
      </div>
      <Footer footerDown={footerDown} footer={footer} footerMenus={footerMenus?.edges} />
    </div>
  );
};

Layout.propTypes = {
  data: PropTypes.object,
  isPost: PropTypes.bool,
  children: PropTypes.object
};

Layout.defaultProps = {
  data: {},
  isPost: false,
  children: {}
};

export default Layout;
