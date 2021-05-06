import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        {/*Page Header Start*/}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>About Us</h2>
              </div>
              <div className="col-12">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* About Start */}
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img aria-hidden src={"assets/img/about.jpg"} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header text-left">
                  <p>Welcome to Sun Homes</p>
                  <h2>25 Years Experience</h2>
                </div>
                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus. Aenean consectetur convallis porttitor.
                    Aliquam interdum at lacus non blandit.
                  </p>
                  <a className="btn" href="/about">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
    );
  }
}

export default About;
