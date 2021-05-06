import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        {/*Top Bar Start*/}
        <div className="top-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="logo">
                    <Link to="/">
                    <h1>Sun Homes</h1>
                    {/*<img src="img/logo.jpg" alt="Logo"> */}
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 d-none d-lg-block">
                <div className="row">
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-calendar"></i>
                      </div>
                      <div className="top-bar-text">
                        <h3>Opening Hour</h3>
                        <p>Mon - Fri, 8:00 - 9:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-call"></i>
                      </div>
                      <div className="top-bar-text">
                        <h3>Call Us</h3>
                        <p>+012 345 6789</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-send-mail"></i>
                      </div>
                      <div className="top-bar-text">
                        <h3>Email Us</h3>
                        <p>info@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Top Bar End */}

        {/* Nav Bar Start */}
        <div className="nav-bar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
              <a href="#top" className="navbar-brand">
                MENU
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/about" className="nav-item nav-link">
                    About
                  </Link>
                  <Link to="/services" className="nav-item nav-link">
                    Service
                  </Link>
                  <Link to="/team" className="nav-item nav-link">
                    Team
                  </Link>
                  <Link to="/portfolio" className="nav-item nav-link">
                    Project
                  </Link>

                  <div className="nav-item dropdown">
                    <a
                      href="#pages"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu">
                      <Link to="/blog" className="dropdown-item">
                        Blog
                      </Link>
                      <Link to="/single" className="dropdown-item">
                        Single
                      </Link>
                    </div>
                  </div>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <div className="ml-auto">
                  <a className="btn" href="#top">
                    Get A Quote
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Nav Bar End */}
      </div>
    );
  }
}

export default Header;
