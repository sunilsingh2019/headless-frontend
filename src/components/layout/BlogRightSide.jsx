import Link from 'next/link';
import Layout from '.';
import client from '../../apollo/client';
import { GET_SIDEBAR } from '../../queries/get-sidebar';

const BlogRightSide = ({ data, dynamicRoute, posts }) => {
  console.warn('data', data);

  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="news-sidebar pl-10">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title"> Search Here</h6>
                <div className="n-sidebar-search">
                  <input type="text" placeholder="Search your keyword..." />
                  <a href="#"><i className="fal fa-search"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title">Popular Feeds</h6>
                <div className="n-sidebar-feed">
                  <ul>
                    {
                      posts?.map((post, index) => {
                        return (
                          <li key={`${post?.node?.id}-${index}` ?? ''}>
                            <div className="feed-content">
                              <span className="feed-date">
                                <i className="fal fa-calendar-alt"></i> {post?.node?.date}
                              </span>
                              <h6><Link href={`/blog/${post?.node?.slug}/`}>{post?.node?.title}</Link></h6>
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="widget">
                <h6 className="sidebar-title">Categories</h6>
                <ul className="n-sidebar-categories">
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          <span>Business</span>
                          <span>26</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          Consultant
                          <span className="category-number">30</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          Creative
                          <span className="category-number">71</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          UI/UX
                          <span className="category-number">56</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative">
                          Texhnology
                          <span className="category-number">60</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="widget">
                <h6 className="sidebar-title">Popular Tag</h6>
                <div className="stags">
                  <a className="single-tag" href="#">landing </a>
                  <a className="single-tag" href="#">Charity</a>
                  <a className="single-tag" href="#">apps</a>
                  <a className="single-tag" href="#">Education build</a>
                  <a className="single-tag" href="#">data</a>
                  <a className="single-tag" href="#">book</a>
                  <a className="single-tag" href="#">Design</a>
                  <a className="single-tag" href="#">website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSide;

