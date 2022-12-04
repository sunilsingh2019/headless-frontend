import React from 'react';
import client from '../apollo/client';
import { BlockRenderer } from '../components/BlockRenderer';
import Layout from '../components/layout';
import { GET_PAGE } from '../queries/pages/get-page';
import { cleanAndTransformBlocks } from '../utils/cleanAndTransformBlocks';
import { sanitize } from '../utils/miscellaneous';
import { handleRedirectsAndReturnData } from '../utils/slug';


export default function Home({ data, blocks }) {
  console.warn('data', data);
  console.warn('blocks', blocks);
  return (
    <Layout data={data}>
      {/* {data?.page?.content ? <div dangerouslySetInnerHTML={{ __html: sanitize(data?.page?.content ?? {}) }} /> : null} */}
      {<BlockRenderer blocks={blocks} />}
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

  const blocks = cleanAndTransformBlocks(data.page.blocksJSON);
  const defaultProps = {

    props: {
      blocks,
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

