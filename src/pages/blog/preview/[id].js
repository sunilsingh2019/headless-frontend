import client from '../../../apollo/client';
import { GET_PAGE_BY_ID} from '../../../queries/pages/get-page';
import Layout from '../../../components/layout';
import {handleRedirectsAndReturnData} from '../../../utils/slug';
import {getAuthToken} from '../../../utils/cookies';
import {getLoginPreviewRedirectUrl} from '../../../utils/redirects';
import {GET_POST_BY_ID} from '../../../queries/posts/get-post';
import {sanitize} from '../../../utils/miscellaneous';

const PostPreview = ( { data } ) => {
	return (
		<Layout data={data} isPost>
			<div dangerouslySetInnerHTML={{__html: sanitize( data?.post?.content ?? {} )}}/>
		</Layout>
	);
};

export default PostPreview;

export async function getServerSideProps( context ) {

	const authToken = getAuthToken( context.req );

	const { params } = context || {};
	const { data, errors } = await client.query( {
		query: GET_POST_BY_ID,
		variables: {
			id: Number( params?.id ?? '' ),
		},
		context: {
			headers: {
				authorization: authToken ? `Bearer ${authToken}` : '',
			}
		}
	} );

	const defaultProps = {
		props: {
			data: data || {}
		}
	};

	const loginRedirectURL = getLoginPreviewRedirectUrl( 'post', params?.id ?? '' );

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'post', true, loginRedirectURL );

}
