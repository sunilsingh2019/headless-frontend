import Link from 'next/link';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {createPaginationLinks} from '../../../utils/pagination';
import cx from 'classnames';
import Previous from './previous';
import Next from './next';
import { v4 as uuidv4 } from 'uuid';

const Pagination = ( {pagesCount, postName} ) => {
	if ( ! pagesCount || ! postName ) {
		return null;
	}

	const router = useRouter();
	const currentPageNo = parseInt( router?.query?.pageNo ) || 1;

	const paginationLinks = createPaginationLinks( currentPageNo, pagesCount );

	return (
		<div className="container">
			<div className="basic-pagination mb-50">
				<nav>
					<ul>
					<li key={uuidv4() }>
						<Previous currentPageNo={currentPageNo} postName={postName}/>
					</li>
						{paginationLinks.map( ( pageNo, index ) => {

							const paginationLink = `/${postName}/page/${pageNo}/`;

							return (
								'number' === typeof pageNo ? (
									<li key={uuidv4() }>
									<Link key={`id-${index}`} href={paginationLink}>
										<a
											className={cx( ' hover:text-white', {
												'is-active bg-gray-500': pageNo === currentPageNo
											} )}
										>
											{pageNo}
										</a>
									</Link>
									</li>
								) : (
								// If its "..."
									<span key={`id-${index}`} className="px-3 py-2">{pageNo}</span>
								)
							);
						} )}
						<li key={uuidv4() }>
						<Next currentPageNo={currentPageNo} pagesCount={pagesCount} postName={postName}/>
						</li>
						
					</ul>
				</nav>
			</div>
		</div>
	);
};

Pagination.propTypes = {
	pagesCount: PropTypes.number,
	postName: PropTypes.string,
};

Pagination.defaultProps = {
	pagesCount: 0,
	postName: 'blog',
};

export default Pagination;
