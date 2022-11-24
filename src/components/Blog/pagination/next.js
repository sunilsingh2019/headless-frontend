import {isEmpty} from 'lodash';
import Link from 'next/link';
const Next = ( {currentPageNo, pagesCount, postName} ) => {

	if ( ! currentPageNo || ! pagesCount || isEmpty( postName ) ) {
		return null;
	}

	// If you are on the last page, dont show next link.
	if ( pagesCount < currentPageNo + 1 ) {
		return null;
	}

	const paginationLink = `/${postName}/page/${currentPageNo + 1}/`;

	return (
		<li>
		<Link href={paginationLink}>
		<a><i className="far fa-angle-right"></i></a>
		</Link>
		</li>
	);
};

export default Next;
