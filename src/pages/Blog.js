import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Our Blog</h2>
              </div>
              <div className="col-12">
                <Link to="/">Home</Link>
                <Link to="/blog">Our Blog</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Blog Start */}
        <div className="blog">
          <div className="container">
            <div className="section-header text-center">
              <p>Latest Blog</p>
              <h2>Latest From Our Blog</h2>
            </div>
            <div className="row blog-page">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      aria-hidden
                      src={"assets/img/blog-1.jpg"}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="#top">
                      +
                    </a>
                  </div>
                  <div className="blog-meta">
                    <p>
                      By<a href="#admin">Admin</a>
                    </p>
                    <p>
                      In<a href="#construction">Construction</a>
                    </p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate. Aliquam
                      metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      aria-hidden
                      src={"assets/img/blog-2.jpg"}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="#top">
                      +
                    </a>
                  </div>
                  <div className="blog-meta">
                    <p>
                      By<a href="#admin">Admin</a>
                    </p>
                    <p>
                      In<a href="#construction">Construction</a>
                    </p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate. Aliquam
                      metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      aria-hidden
                      src={"assets/img/blog-3.jpg"}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="#top">
                      +
                    </a>
                  </div>
                  <div className="blog-meta">
                    <p>
                      By<a href="#admin">Admin</a>
                    </p>
                    <p>
                      In<a href="#construction">Construction</a>
                    </p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate. Aliquam
                      metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      aria-hidden
                      src={"assets/img/blog-1.jpg"}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="#top">
                      +
                    </a>
                  </div>
                  <div className="blog-meta">
                    <p>
                      By<a href="#admin">Admin</a>
                    </p>
                    <p>
                      In<a href="#construction">Construction</a>
                    </p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate. Aliquam
                      metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      aria-hidden
                      src={"assets/img/blog-2.jpg"}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="#top">
                      +
                    </a>
                  </div>
                  <div className="blog-meta">
                    <p>
                      By<a href="#admin">Admin</a>
                    </p>
                    <p>
                      In<a href="#construction">Construction</a>
                    </p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate. Aliquam
                      metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      aria-hidden
                      src={"assets/img/blog-3.jpg"}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="#top">
                      +
                    </a>
                  </div>
                  <div className="blog-meta">
                    <p>
                      By<a href="#admin">Admin</a>
                    </p>
                    <p>
                      In<a href="#construction">Construction</a>
                    </p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non vulputate. Aliquam
                      metus tortor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#previous">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#1">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#2">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#3">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#next">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
      </div>
    );
  }
}

export default Blog;
