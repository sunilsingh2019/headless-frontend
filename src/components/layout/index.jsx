import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import GetHead from "../getHead";
import Seo from '../seo';
import { isEmpty } from 'lodash';
import { sanitize } from '../../utils/miscellaneous';
import PropTypes from 'prop-types';

const Layout = ({ data, isPost, children }) => {
  const { headerLogo, page, post, posts, header, footer, headerMenus, footerMenus, footerDown, favIcon, siteTitle } = data || {};
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
      <Header headerLogo={headerLogo} header={header} headerMenus={headerMenus?.edges} />

      {children}

      <Footer footerDown={footerDown} footer={footer} footerMenus={footerMenus?.edges} />
    </div>
  );
};

Layout.propTypes = {
  data: PropTypes.object,
  isPost: PropTypes.bool,
  // children: PropTypes.object
};

Layout.defaultProps = {
  data: {},
  isPost: false,
  // children: {}
};

export default Layout;
