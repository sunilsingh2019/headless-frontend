import React from 'react';
//import HomeThirteenMain from '../components/Home'
//import SEO from '../components/seo';
import client from '../apollo/client';
import Layout from '../components/layout';
import { GET_PAGE } from '../queries/pages/get-page';
import { sanitize } from '../utils/miscellaneous';
import { handleRedirectsAndReturnData } from '../utils/slug';


export default function Home({ data }) {
  console.warn(data, 'data');
  return (
    <Layout data={data}>
      {data?.page?.content ? <div dangerouslySetInnerHTML={{ __html: sanitize(data?.page?.content ?? {}) }} /> : null}
    </Layout>
  );
}

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


// export default function Home({ data }) {
//   return (
//     <Layout data={data}>
//       content
//     </Layout>
//   )
// }

// export async function getStaticProps(context) {
//   const { data, loading, networkStatus } = await client.query({
//     query: GET_MENUS,
//   });
//   return {
//     props: {
//       data: {
//         menus: {
//           headerMenus: data?.headerMenus?.edges || [],
//           footerMenus: data?.footerMenus?.edges || [],
//         },
//         logo: {
//           headerLogo: data?.headerLogo?.headerFieldGroup || []
//         },
//         siteHeader: {
//           siteTitle: data?.siteTitle || []
//         },
//         favIcons: {
//           favIcon: data?.favIcon || []
//         },
//         footerBottom: {
//           footerDown: data?.footerDown?.footerBottomFieldGroup || []
//         },
//         footerTop: {
//           footer: data?.footer?.footerFieldGroup || []
//         },
//         PageLink: {
//           footer: data?.footer?.footerFieldGroup || []
//         }
//       }
//     },
//     revalidate: 1
//   }
// }

