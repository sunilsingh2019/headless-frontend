
import client from "../../../apollo/client";
import Layout from "../../../components/layout";
import { GET_PAGE_BY_ID } from "../../../queries/pages/get-page";
import { getAuthToken } from "../../../utils/cookies";
import { sanitize } from "../../../utils/miscellaneous";
import { getLoginPreviewRedirectUrl } from "../../../utils/redirects";
import { handleRedirectsAndReturnData } from "../../../utils/slug";



const PagePreview = ({ data }) => {
  return (
    <Layout data={data}>
      <div dangerouslySetInnerHTML={{ __html: sanitize(data?.page?.content ?? {}) }} />
    </Layout>
  );
};

export default PagePreview;

export async function getServerSideProps(context) {

  const authToken = getAuthToken(context.req);

  const { params } = context || {};
  const { data, errors } = await client.query({
    query: GET_PAGE_BY_ID,
    variables: {
      id: Number(params?.id ?? ''),
    },
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : '',
      }
    }
  });

  const defaultProps = {
    props: {
      data: data || {}
    }
  };

  const loginRedirectURL = getLoginPreviewRedirectUrl('page', params?.id ?? '');

  return handleRedirectsAndReturnData(defaultProps, data, errors, 'page', true, loginRedirectURL);
}