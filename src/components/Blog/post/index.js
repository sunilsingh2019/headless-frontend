
import Link from 'next/link';
import Image from '../../image';
import {sanitize} from '../../../utils/miscellaneous';

const Post = ( {post} ) => {

	return (
		
		<>
	<div className="postbox__thumb w-img mb-30">
			<div className="">
					<>
					<Link href="">
						<a><img src={ post?.featuredImage?.node?.sourceUrl } alt="" />
						<div className="postbox__tag-wrapper">
							<span className="postbox__tag">Blog</span>
						</div></a>
					</Link> 
					</>
					
			</div>
			<div className="postbox__tag-wrapper">
				<span className="postbox__tag">Blog</span>
			</div>
	</div>
	<div className="postbox__content">
		<div className="postbox__meta">
			<span><a href="#"><i className="far fa-user"></i>{post?.author?.node?.name}</a></span>
			<span><i className="far fa-calendar-check"></i> {post?.date} </span>
		</div>
		<h3 className="postbox__title">
			<Link href="">
				<a> { post?.title }</a>
			</Link>
		</h3>
		<div className="postbox__text">
			<p dangerouslySetInnerHTML={{__html: sanitize( post?.excerpt ?? '' )}}/>
		</div>
		<div className="postbox__read-more">
			<Link href={`/blog/${post?.slug}/`} className="tp-solid-btn">read more</Link>
		</div>
	</div>
	</>
	);
};

export default Post;
