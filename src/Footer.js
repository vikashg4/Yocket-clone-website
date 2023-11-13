import React from "react";

import "./style.css";
function Footer() {
  return (
    <div className=" ">
      <section class="footers bg-light pt-5 pb-3">
        <div class="container-fluid pt-5 border-top">
          <div class="row p-2">
            <div class="col-xs-12 col-sm-6 col-md-4 p-2 footers-one">
              <div class="footers-logo">
                <img
                  src="https://dreamstofly.com/web/images/logo-dark.png"
                  alt="Logo"
                  style={{ width: "180px" }}
                />
              </div>
              <div class="footers-info mt-3">
                <p>
                  Cras sociis natoque penatibus et magnis Lorem Ipsum tells
                  about the compmany right now the best.
                </p>
              </div>
              <div class="social-icons">
                <a href="https://www.facebook.com/">
                  <i
                    id="social-fb"
                    class="fa fa-facebook-square fa-2x social"
                  ></i>
                </a>
                <a href="https://twitter.com/">
                  <i
                    id="social-tw"
                    class="fa fa-twitter-square fa-2x social"
                  ></i>
                </a>
                <a href="https://plus.google.com/">
                  <i
                    id="social-gp"
                    class="fa fa-google-plus-square fa-2x social"
                  ></i>
                </a>
                <a href="mailto:bootsnipp@gmail.com">
                  <i
                    id="social-em"
                    class="fa fa-envelope-square fa-2x social"
                  ></i>
                </a>
              </div>
              <div>
                <h4>Want to discuss your goals?</h4>
                <p>Our experts are here to make it happen.</p>
                <button
                  className="btn text-white p-2"
                  style={{
                    backgroundColor: "#10C0E7",
                    width: "170px",
                    borderRadius: "10px",
                  }}
                >
                  Call now
                </button>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 p-2 footers-two">
              <h5>Essentials </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="maintenance.html">Search</a>
                </li>
                <li>
                  <a href="contact.html">Sell your Car</a>
                </li>
                <li>
                  <a href="about.html">Advertise with us</a>
                </li>
                <li>
                  <a href="about.html">Dealers Portal</a>
                </li>
                <li>
                  <a href="about.html">Post Requirements</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 p-2 footers-three">
              <h5>Information </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="maintenance.html">Register Now</a>
                </li>
                <li>
                  <a href="contact.html">Advice</a>
                </li>
                <li>
                  <a href="about.html">Videos</a>
                </li>
                <li>
                  <a href="about.html">Blog</a>
                </li>
                <li>
                  <a href="about.html">Services</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 p-2 footers-four">
              <h5>Explore </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="maintenance.html">News</a>
                </li>
                <li>
                  <a href="contact.html">Sitemap</a>
                </li>
                <li>
                  <a href="about.html">Testimonials</a>
                </li>
                <li>
                  <a href="about.html">Feedbacks</a>
                </li>
                <li>
                  <a href="about.html">User Agreement</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 p-2 footers-five">
              <h5>Company </h5>
              <ul class="list-unstyled">
                <li>
                  <a href="maintenance.html">Career</a>
                </li>
                <li>
                  <a href="about.html">For Parters</a>
                </li>
                <li>
                  <a href="about.html">Terms</a>
                </li>
                <li>
                  <a href="about.html">Policy</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="disclaimer bg-light border">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-md-12 py-2">
              <small>
                Disclaimer: Element Limited is only an intermediary offering its
                platform to facilitate the transactions between Seller
              </small>
            </div>
          </div>
        </div>
      </section>
      <section class="copyright border">
        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-md-12 pt-3">
              <p class="text-muted">© 2023 Yocket. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
