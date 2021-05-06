import React, { Component } from "react";
import { Link } from "react-router-dom";

class Team extends Component {
  render() {
    return (
      <div>
        {/* Page Header Start */}
        <div class="page-header">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2>Our Team</h2>
              </div>
              <div class="col-12">
                <Link to="/">Home</Link>
                <Link to="/team">Our Team</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Team Start */}
        <div class="team">
          <div class="container">
            <div class="section-header text-center">
              <p>Our Team</p>
              <h2>Meet Our Engineer</h2>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-1.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Adam Phillips</h2>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-2.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Dylan Adams</h2>
                    <p>Civil Engineer</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-3.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Jhon Doe</h2>
                    <p>Interior Designer</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-4.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Josh Dunn</h2>
                    <p>Painter</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-1.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Adam Phillips</h2>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-2.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Dylan Adams</h2>
                    <p>Civil Engineer</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-3.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Jhon Doe</h2>
                    <p>Interior Designer</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="team-item">
                  <div class="team-img">
                    <img
                      aria-hidden
                      src={"assets/img/team-4.jpg"}
                      alt="Team Image"
                    />
                  </div>
                  <div class="team-text">
                    <h2>Josh Dunn</h2>
                    <p>Painter</p>
                  </div>
                  <div class="team-social">
                    <a class="social-tw" href="#twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-fb" href="#facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="social-li" href="#linkedin">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="social-in" href="#instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
      </div>
    );
  }
}

export default Team;
