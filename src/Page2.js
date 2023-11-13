import React from "react";
import "./style.css";
export default function Page2() {
  return (
    <div className="container p-4 ">
      <div className="p-3">
        <h2
          className="text-center mobile-view-txtheading "
          style={{ color: "#10C0E7", fontWeight: "bold" }}
        >
          SMART FEATURES
        </h2>
        <h1
          className="text-center mobile-view-txtheading "
          style={{ color: "black", fontWeight: "bold" }}
        >
          All-Tech For Studying Abroad
        </h1>
        <p className="text-muted  text-center">
          We have smart features to help you throughout your abroad education
          journey
        </p>
      </div>
      <div className="row p-2  ">
        <div className="col-md-4 d-flex align-items-stretch  ">
          <div className="card  page2-box p-4">
            <h3 className="mobile-card-txt">King's College London</h3>
            <p className="text-muted p-2">
              They are the one's who have already been in your shoes and have
              similar dreams like yours.
            </p>
            <img
              src="https://3rdiconsulting.in/wp-content/uploads/2018/12/mba-abroad.jpeg"
              alt="abc"
            />
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-stretch  ">
          <div className="card  page2-box   p-4">
            <h3 className="mobile-card-txt">University of Leicester</h3>
            <p className="text-muted p-2">
              They are the one's who have already been in your shoes and have
              similar dreams like yours.
            </p>
            <img
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/09/989743-indian-students-foreign-universities.jpg "
              alt="abc"
            />
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-stretch  ">
          <div className="card  page2-box   p-4">
            <h3 className="mobile-card-txt">University of Leeds</h3>
            <p className="text-muted p-2">
              They are the one's who have already been in your shoes and have
              similar dreams like yours.
            </p>
            <img
              src="https://bsbinternational.org.uk/wp-content/uploads/2019/07/Why-Are-Indian-Students-Choosing-To-Study-Abroad-More-Than-Ever.jpg"
              alt="abc"
            />
          </div>
        </div>
      </div>

      <div className="row  p-2 ">
        <div className="col-md-4 d-flex align-items-stretch  ">
          <div className="card  page2-box   p-4 ">
            <h3 className="mobile-card-txt">King's College London</h3>
            <p className="text-muted p-2">
              They are the one's who have already been in your shoes and have
              similar dreams like yours.
            </p>
            <img
              src="https://campusworld.net/images/sliders/slider2.jpg"
              alt="abc"
            />
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-stretch  ">
          <div className="card page2-box   p-4 ">
            <h3 className="mobile-card-txt">University of Leicester</h3>
            <p className="text-muted p-2">
              They are the one's who have already been in your shoes and have
              similar dreams like yours.
            </p>
            <img
              src="https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/21150137/pang-yuhao-_kd5cxwZOK4-unsplash-1.jpg "
              alt="abc"
            />
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card  page2-box   p-4">
            <h3 className="mobile-card-txt">University of Leeds</h3>
            <p className="text-muted p-2">
              They are the one's who have already been in your shoes and have
              similar dreams like yours.
            </p>
            <img
              src="https://studysmart.co.in/wp-content/uploads/2020/12/Ways-to-Study-Abroad-1-1.jpg"
              alt="abc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
