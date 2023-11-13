import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";

export default function Page6() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container  p-4 ">
      <div className="p-4">
        <h2
          className="text-center mobile-view-txtheading"
          style={{ color: "#10C0E7", fontWeight: "bold" }}
        >
          PREMIUM STUDENT REVIEWS
        </h2>
        <h1
          className="text-center mobile-view-txtheading"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Trusted by thousands far and wide
        </h1>
        <p className="text-muted  text-center">
          Stay up-to-date with the latest updates on overseas education, student
          life, rules, COVID -19, and many more!
        </p>
      </div>

      <div>
        <div class="row d-flex justify-content-center p-4">
          <div class="col-md-6 col-sm-6 text-center p-3  ">
            <img
              src="https://d15gkqt2d16c1n.cloudfront.net/images/trustpilot_with_stars.svg"
              alt="abc"
            />
            <h3 className="">4.6 Stars</h3>
            <h4 className=" ">1,600+ reviews</h4>
          </div>
          <div class="col-md-6  col-sm-6 text-center p-3">
            <img
              src="https://d15gkqt2d16c1n.cloudfront.net/images/google_with_stars.svg"
              alt="abc"
            />
            <h3 className="">4.6 Stars</h3>
            <h4 className="">1,600+ reviews</h4>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card shadow p-4 ">
              <div className=" text-center p-2 ">
                <img
                  src=" https://yocket.com/_ipx/f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/universities/hero-logos/UMCP.png"
                  alt=" abc"
                  width={150}
                />
                <h3 style={{ color: "green", fontWeight: "bold" }}>
                  Premium Service does it all
                </h3>
                <h6>
                  {" "}
                  100% recommend it to anyone who is interested in pursuing
                  education abroad. My counselor Preeti and her team helped me
                  on each and every step of the application. They guided me From
                  Uni shortlisting to essays.
                </h6>
                <div class="col text-center p-4">
                  <img
                    src=" https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                    class="user"
                  />
                  <h6>Arjun Singh</h6>
                  <h6> MS in Mechanical Engineering 2022 </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow p-4">
              <div className=" text-center p-2 ">
                <img
                  src=" https://yocket.com/_ipx/f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/universities/hero-logos/UMCP.png"
                  alt=" abc"
                  width={150}
                />
                <h3 style={{ color: "green", fontWeight: "bold" }}>
                  Premium Service does it all
                </h3>
                <h6>
                  {" "}
                  100% recommend it to anyone who is interested in pursuing
                  education abroad. My counselor Preeti and her team helped me
                  on each and every step of the application. They guided me From
                  Uni shortlisting to essays.
                </h6>
                <div class="col text-center p-4">
                  <img
                    src=" https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                    class="user"
                  />
                  <h6>Arjun Singh</h6>
                  <h6> MS in Mechanical Engineering 2022 </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow p-4">
              <div className=" text-center p-2 ">
                <img
                  src=" https://yocket.com/_ipx/f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/universities/hero-logos/UMCP.png"
                  alt=" abc"
                  width={150}
                />
                <h3 style={{ color: "green", fontWeight: "bold" }}>
                  Premium Service does it all
                </h3>
                <h6>
                  {" "}
                  100% recommend it to anyone who is interested in pursuing
                  education abroad. My counselor Preeti and her team helped me
                  on each and every step of the application. They guided me From
                  Uni shortlisting to essays.
                </h6>
                <div class="col text-center p-4">
                  <img
                    src=" https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                    class="user"
                  />
                  <h6>Arjun Singh</h6>
                  <h6> MS in Mechanical Engineering 2022 </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow p-4">
              <div className=" text-center p-2 ">
                <img
                  src=" https://yocket.com/_ipx/f_webp/https://d15gkqt2d16c1n.cloudfront.net/images/universities/hero-logos/UMCP.png"
                  alt=" abc"
                  width={150}
                />
                <h3 style={{ color: "green", fontWeight: "bold" }}>
                  Premium Service does it all
                </h3>
                <h6>
                  {" "}
                  100% recommend it to anyone who is interested in pursuing
                  education abroad. My counselor Preeti and her team helped me
                  on each and every step of the application. They guided me From
                  Uni shortlisting to essays.
                </h6>
                <div class="col text-center p-4">
                  <img
                    src=" https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                    class="user"
                  />
                  <h6>Arjun Singh</h6>
                  <h6> MS in Mechanical Engineering 2022 </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
