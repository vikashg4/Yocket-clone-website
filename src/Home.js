import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
function Home() {
  return (
    <div className="container-fluid p-4">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner position-relative">
          {/* First Slide */}
          <div className="carousel-item active" style={{ height: "100vh" }}>
            <img
              src="https://d15gkqt2d16c1n.cloudfront.net/images/webp/HomepageHeroImage2.webp"
              className="d-block h-100 w-100"
              alt="..."
              height="100vh"
            />
            <div
              className="position-absolute"
              style={{
                textAlign: "center",
                top: "50%",
                left: 0,
                right: 0,
                margin: "auto",
                transform: "translateY(-50%)",
              }}
            >
              <h1
                className="fw-bold mobile-view-txtheading"
                style={{ color: "skyblue" }}
              >
                YOUR GLOBAL NETWORK
              </h1>
              <h1
                className="fw-bold mobile-view-txtheading display-block-mv"
                style={{ color: "white" }}
              >
                Join India's largest study abroad community with Yocket
              </h1>
              <br />
              <p className="text-white fw-bold mobile-view-txt">
                15k+ Successful premium admits
              </p>
              <br />
              <button
                className="btn p-3 display-block-mv"
                style={{
                  backgroundColor: "#10c0e7",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Explore Premium Counselling
              </button>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item" style={{ height: "100vh" }}>
            <img
              src="https://d15gkqt2d16c1n.cloudfront.net/images/webp/HomepageHeroImage1.webp"
              className="d-block h-100 w-100"
              alt="..."
              height="100vh"
            />
            <div
              className="position-absolute"
              style={{
                textAlign: "center",
                top: "50%",
                left: 0,
                right: 0,
                margin: "auto",
                transform: "translateY(-50%)",
              }}
            >
              <h1
                className="fw-bold mobile-view-txtheading"
                style={{ color: "skyblue" }}
              >
                YOUR GLOBAL NETWORK
              </h1>
              <h1
                className="fw-bold mobile-view-txtheading display-block-mv"
                style={{ color: "white" }}
              >
                Join India's largest study abroad community with Yocket
              </h1>
              <br />
              <p className="text-white fw-bold mobile-view-txt">
                15k+ Successful premium admits
              </p>
              <br />
              <button
                className="btn p-3 display-block-mv"
                style={{
                  backgroundColor: "#10c0e7",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Explore Premium Counselling
              </button>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item" style={{ height: "100vh" }}>
            <img
              src="https://d15gkqt2d16c1n.cloudfront.net/images/webp/HomepageHeroImage3.webp"
              className="d-block h-100 w-100"
              height="100vh"
              alt="..."
            />
            <div
              className="position-absolute"
              style={{
                textAlign: "center",
                top: "50%",
                left: 0,
                right: 0,
                margin: "auto",
                transform: "translateY(-50%)",
              }}
            >
              <h1
                className="fw-bold mobile-view-txtheading"
                style={{ color: "skyblue" }}
              >
                YOUR GLOBAL NETWORK
              </h1>
              <h1
                className="fw-bold mobile-view-txtheading display-block-mv"
                style={{ color: "white" }}
              >
                Join India's largest study abroad community with Yocket
              </h1>
              <br />
              <p className="text-white fw-bold mobile-view-txt">
                15k+ Successful premium admits
              </p>
              <br />
              <button
                className="btn p-3 display-block-mv"
                style={{
                  backgroundColor: "#10c0e7",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Explore Premium Counselling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
