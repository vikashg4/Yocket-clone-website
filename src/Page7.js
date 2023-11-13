import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Page7() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
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
        <h1
          className="text-center mobile-view-txtheading"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Watch the Yocketers share their experience
        </h1>
      </div>

      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card shadow p-4">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk"></iframe>
              <div className=" p-2  text-center fw-bold">
                <h5 className=" fw-bold">Rakshit Grover Story</h5>
                <h6 className="mobile-view-txt"> Duke University 2022</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow p-4">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk"></iframe>
              <div className=" p-2  text-center fw-bold">
                <h5 className=" fw-bold">Rakshit Grover Story</h5>
                <h6 className="mobile-view-txt"> Duke University 2022</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow p-4">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk"></iframe>
              <div className=" p-2  text-center fw-bold">
                <h5 className=" fw-bold">Rakshit Grover Story</h5>
                <h6 className="mobile-view-txt"> Duke University 2022</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="col text-center p-4">
        <button
          className="btn p-3 "
          style={{
            backgroundColor: "#10C0E7",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {" "}
          Explore more Event{" "}
        </button>{" "}
      </div>
    </div>
  );
}
