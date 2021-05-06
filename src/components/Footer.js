import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer Start */}
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="footer-contact">
                  <h2>Office Contact</h2>
                  <p>
                    <i className="fa fa-map-marker-alt"></i>123 Street, New
                    York, USA
                  </p>
                  <p>
                    <i className="fa fa-phone-alt"></i>+012 345 67890
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>info@example.com
                  </p>
                  <div className="footer-social">
                    <a href="#top">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#top">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#top">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#top">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#top">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-link">
                  <h2>Services Areas</h2>
                  <a href="#BuildingConstruction">Building Construction</a>
                  <a href="#HouseRenovation">House Renovation</a>
                  <a href="#ArchitectureDesign">Architecture Design</a>
                  <a href="#InteriorDesign">Interior Design</a>
                  <a href="#Painting">Painting</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-link">
                  <h2>Useful Pages</h2>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/team">Our Team</Link>
                  <Link to="/portfolio">Projects</Link>
                  <Link to="/">Testimonial</Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="newsletter">
                  <h2>Newsletter</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulpu
                  </p>
                  <div className="form">
                    <input className="form-control" placeholder="Email here" />
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-menu">
            <div className="f-menu">
              <a href="#top">Terms of use</a>
              <a href="#top">Privacy policy</a>
              <a href="#top">Cookies</a>
              <a href="#top">Help</a>
              <a href="#top">FQAs</a>
            </div>
          </div>
          <div className="container copyright">
            <div className="row">
              <div className="col-md-6">
                <p>
                  &copy; <a href="#sun">Sun Homes</a>, All Right Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </div>
    );
  }
}

export default Footer;
