import {isEmpty, isArray} from 'lodash';
import Post from '../post';
import PropTypes from 'prop-types';
import BlogRightSide from '../../../components/layout/BlogRightSide'
const Posts = ( {posts} ) => {

	if ( isEmpty( posts ) && ! isArray( posts ) ) {
		return null;
	}

	return (
		<section className="postbox__area pt-120 pb-80">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 col-lg-8">
					<div className="postbox__wrapper pr-20">
							{
								posts.map( ( post, index ) => {
									return (
										<article key={`${post?.node?.id}-${index}` ?? ''} className="postbox__item mb-50">
											<Post post={post?.node}/>
										</article>
									);
								} )
							}
						 </div>
            </div>
            {/* blog right side start */}
            <BlogRightSide post={posts}/>
            {/* blog right side end */}
          </div>
        </div>
      </section>
	);
};

Posts.propTypes = {
	posts: PropTypes.array
};

Posts.defaultProps = {
	posts: []
};

export default Posts;
