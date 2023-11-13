import React from "react";

export default function Page3() {
  return (
    <div className="container  p-4 ">
      <div className="p-4">
        <h2
          className="text-center mobile-view-txtheading "
          style={{ color: "#10C0E7", fontWeight: "bold" }}
        >
          YOCKET PREMIUM
        </h2>
        <h1
          className="text-center mobile-view-txtheading "
          style={{ color: "black", fontWeight: "bold" }}
        >
          Our Winning Record
        </h1>
        <p className="text-muted  text-center">
          No tall claims, we back the efficiency of our consultancy with stats.
          Check for yourselves!
        </p>
      </div>
      <div className="row  gx-4 gy-4">
        <div className="col-md-3 text-center p-4">
          <img src="https://yocket.com/svgs/SuccessfullAdmits.svg " alt="abc" />
          <h1 className="text-center fw-bold pt-2 ">15k+</h1>
          <p className="text-muted text-center p-2">Successful Admits</p>
        </div>

        <div className="col-md-3 text-center  p-4">
          <img
            src="https://yocket.com/svgs/ScholarshipsGranted.svg "
            alt="abc"
          />
          <h1 className="text-center fw-bold pt-2 ">$ 15 Million+ </h1>
          <p className="text-muted text-center p-2">Successful Admits</p>
        </div>

        <div className="col-md-3 text-center  p-4">
          <img src="https://yocket.com/svgs/LoanSantioned.svg" alt="abc" />
          <h1 className="text-center fw-bold pt-2 ">3500 Cr+</h1>
          <p className="text-muted text-center p-2">Loans Sanctioned</p>
        </div>

        <div className="col-md-3  text-center p-4">
          <img
            src="https://yocket.com/svgs/ScholarshipsGranted.svg "
            alt="abc"
          />
          <h1 className=" fw-bold pt-2 ">98 %</h1>
          <p className="text-muted   p-2">Visa Success Rate</p>
        </div>
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
          Explore Premium Counsulling{" "}
        </button>{" "}
      </div>
    </div>
  );
}
