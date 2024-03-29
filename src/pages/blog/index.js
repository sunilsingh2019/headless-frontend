import client from '../../apollo/client';
import Layout from '../../components/layout';
import { PER_PAGE_FIRST, totalPagesCount } from '../../utils/pagination';
import Pagination from '../../components/blog/pagination';
import Posts from '../../components/blog/posts';
import {handleRedirectsAndReturnData} from '../../utils/slug';
import {GET_POSTS} from '../../queries/posts/get-posts';
import Breadcrumb from '../../components/layout/Breadcrumb';

const Blog = ( { data } ) => {
	const pagesCount = totalPagesCount( data?.posts?.pageInfo?.offsetPagination?.total ?? 0 );
	return (
		<Layout data={data}>
			<Breadcrumb />
			<Posts posts={data?.posts?.edges ?? []}/>
			<Pagination pagesCount={pagesCount} postName="blog" />
		</Layout>
	);
};

export default Blog;

export async function getStaticProps() {
	const { data, errors } = await client.query( {
		query: GET_POSTS,
		variables: {
			uri: '/blog/',
			perPage: PER_PAGE_FIRST,
			offset: null,
		},
	} );

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

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'posts' );
}
