import React from 'react';
import client from '../apollo/client';
import Layout from '../components/layout';
import { GET_PAGE } from '../queries/pages/get-page';
import { sanitize } from '../utils/miscellaneous';
import { handleRedirectsAndReturnData } from '../utils/slug';


export default function Home({ data }) {
  { JSON.stringify(data.page.blocks.attributesJSON) }
  console.warn('data', data);
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

      blocks: JSON.parse(data.page.blocks.attributesJSON) || {},

      data: data || {},
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

