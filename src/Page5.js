import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Page5() {
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
        <h2
          className="text-center mobile-view-txtheading "
          style={{ color: "#10C0E7", fontWeight: "bold" }}
        >
          YOCKET EVENTS
        </h2>
        <h1
          className="text-center mobile-view-txtheading "
          style={{ color: "black", fontWeight: "bold" }}
        >
          What’s happening with overseas education
        </h1>
        <p className="text-muted  text-center">
          Stay up-to-date with the latest updates on overseas education, student
          life, rules, COVID -19, and many more!
        </p>
      </div>

      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card shadow p-4 ">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D15gkqt2d16c1n.cloudfront.net/images/events/1699265718968_Banner%205-21.png "
                alt=" abc"
                height={250}
              />
              <div className=" p-2 ">
                <h3 className="mobile-view-txt">City Meetups</h3>
                <h6 className="mobile-view-txt">
                  Fall 2024 Counselling Day @ Hyderabad{" "}
                </h6>
                <h6 className="mobile-view-txt">
                  18th Nov 2023 12:30 PM to 06:30 PM IST
                </h6>
              </div>
              <h6 className="mobile-view-txt display-block-mv">
                Physical Meetup @Hyderabad
              </h6>
              <h6 className="mobile-view-txt display-block-mv">
                {" "}
                Bachelor/Masters only
              </h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow p-4">
              <img
                src="https://media.gettyimages.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=gi&k=20&c=yqefDkarUFdQCoMIHvs7PifmgeTdJ8F-3nGxLrN_8Eo= "
                alt=" abc"
                height={250}
              />
              <div className=" p-2 ">
                <h3 className="mobile-view-txt">Basic of Study Abroad</h3>
                <h6 className="mobile-view-txt">24/7 Webinar </h6>
                <h6 className="mobile-view-txt">
                  18th Nov 2023 12:30 PM to 06:30 PM IST
                </h6>
              </div>
              <button
                className="btn p-3 display-block-mv"
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow p-4">
              <img
                src="https://media.istockphoto.com/id/1406888053/photo/a-group-of-cheerful-people-at-graduation-holding-diplomas-or-certificates-up-together-and.webp?b=1&s=170667a&w=0&k=20&c=oh4lt1RB3SopYEsYsZ_WAFGV09lmT0lpI5uVYvNLUDw="
                alt=" abc"
                height={250}
              />
              <div className=" p-2 ">
                <h3 className="mobile-view-txt">Test Prep</h3>
                <h6 className="mobile-view-txt">
                  Fall 2024 Counselling Day @ Hyderabad{" "}
                </h6>
                <h6 className="mobile-view-txt">
                  18th Nov 2023 12:30 PM to 06:30 PM IST
                </h6>
              </div>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow p-4">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D15gkqt2d16c1n.cloudfront.net/images/events/1699265718968_Banner%205-21.png "
                alt=" abc"
                height={250}
              />
              <div className=" p-2 ">
                <h3 className="mobile-view-txt">City Meetups</h3>
                <h6 className="mobile-view-txt">
                  Fall 2024 Counselling Day @ Hyderabad{" "}
                </h6>
                <h6 className="mobile-view-txt">
                  18th Nov 2023 12:30 PM to 06:30 PM IST
                </h6>
              </div>
              <h6 className="mobile-view-txt display-block-mv">
                Physical Meetup @Hyderabad
              </h6>
              <h6 className="mobile-view-txt display-block-mv">
                {" "}
                Bachelor/Masters only
              </h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow p-4">
              <img
                src="https://media.gettyimages.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=gi&k=20&c=yqefDkarUFdQCoMIHvs7PifmgeTdJ8F-3nGxLrN_8Eo= "
                alt=" abc"
                height={250}
              />
              <div className=" p-2 ">
                <h3 className="mobile-view-txt">Basic of Study Abroad</h3>
                <h6 className="mobile-view-txt">24/7 Webinar </h6>
                <h6 className="mobile-view-txt">
                  18th Nov 2023 12:30 PM to 06:30 PM IST
                </h6>
              </div>
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
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="col mt-2 text-center p-4">
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
