import React, { Component } from "react";
import { Link } from "react-router-dom";

class Service extends Component {
  render() {
    return (
      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Our Services</h2>
              </div>
              <div className="col-12">
                <Link to="/about">About Us</Link>
                <Link to="/services">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Service Start */}
        <div className="service">
          <div className="container">
            <div className="section-header text-center">
              <p>Our Services</p>
              <h2>We Provide Services</h2>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      aria-hidden
                      src={"assets/img/service-1.jpg"}
                      alt="Image"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Building Construction</h3>
                    <a
                      className="btn"
                      href="assets/img/service-1.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      aria-hidden
                      src={"assets/img/service-2.jpg"}
                      alt="Image"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>House Renovation</h3>
                    <a
                      className="btn"
                      href="assets/img/service-2.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      aria-hidden
                      src={"assets/img/service-3.jpg"}
                      alt="Image"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Architecture Design</h3>
                    <a
                      className="btn"
                      href="assets/img/service-3.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      aria-hidden
                      src={"assets/img/service-4.jpg"}
                      alt="Image"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Interior Design</h3>
                    <a
                      className="btn"
                      href="assets/img/service-4.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      aria-hidden
                      src={"assets/img/service-5.jpg"}
                      alt="Image"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Fixing & Support</h3>
                    <a
                      className="btn"
                      href="assets/img/service-5.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      aria-hidden
                      src={"assets/img/service-6.jpg"}
                      alt="Image"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Painting</h3>
                    <a
                      className="btn"
                      href="assets/img/service-6.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
      </div>
    );
  }
}

export default Service;
