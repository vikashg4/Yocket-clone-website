import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import Swiper styles
import "swiper/css";

const Page10 = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div class="  ">
          <img
            src="https://d15gkqt2d16c1n.cloudfront.net/images/webp/HomepageHeroImage3.webp"
            class="d-block h-100 w-100"
            alt="..."
            height={"100vh"}
          />{" "}
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
              className="fw-bold mobile-view-txt "
              style={{ color: "skyblue" }}
            >
              YOUR GLOBAL NETWORK
            </h1>
            <h1
              className="fw-bold mobile-view-txtheading  display-block-mv"
              style={{ color: "white" }}
            >
              Join India largest study Abroad community with Yocket{" "}
            </h1>
            <br />
            <p className="text-white fw-bold mobile-view-txt">
              15k+ Successfull premium admits
            </p>
            <br />
            <button
              className="btn p-3 display-block-mv "
              style={{
                backgroundColor: "#10C0E7",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {" "}
              Explore Premium Counsulling{" "}
            </button>{" "}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="  ">
          <img
            src="https://d15gkqt2d16c1n.cloudfront.net/images/webp/HomepageHeroImage3.webp"
            class="d-block h-100 w-100"
            alt="..."
            height={"100vh"}
          />{" "}
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
              className="fw-bold mobile-view-txt "
              style={{ color: "skyblue" }}
            >
              YOUR GLOBAL NETWORK
            </h1>
            <h1
              className="fw-bold mobile-view-txtheading  display-block-mv"
              style={{ color: "white" }}
            >
              Join India largest study Abroad community with Yocket{" "}
            </h1>
            <br />
            <p className="text-white fw-bold mobile-view-txt">
              15k+ Successfull premium admits
            </p>
            <br />
            <button
              className="btn p-3 display-block-mv "
              style={{
                backgroundColor: "#10C0E7",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {" "}
              Explore Premium Counsulling{" "}
            </button>{" "}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="  ">
          <img
            src="https://d15gkqt2d16c1n.cloudfront.net/images/webp/HomepageHeroImage3.webp"
            class="d-block h-100 w-100"
            alt="..."
            height={"100vh"}
          />{" "}
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
              className="fw-bold mobile-view-txt "
              style={{ color: "skyblue" }}
            >
              YOUR GLOBAL NETWORK
            </h1>
            <h1
              className="fw-bold mobile-view-txtheading  display-block-mv"
              style={{ color: "white" }}
            >
              Join India largest study Abroad community with Yocket{" "}
            </h1>
            <br />
            <p className="text-white fw-bold mobile-view-txt">
              15k+ Successfull premium admits
            </p>
            <br />
            <button
              className="btn p-3 display-block-mv "
              style={{
                backgroundColor: "#10C0E7",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {" "}
              Explore Premium Counsulling{" "}
            </button>{" "}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Page10;
