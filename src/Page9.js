import React from "react";
import "./style.css";

export default function Page9() {
  return (
    <div className="container p-5 mobile-bg ">
      <div className="row">
        <div className="col-6">
          <h2 className="fw-bold">
            Download the <span style={{ color: "skyblue" }}> Yocket</span> app
            to get all your study abroad updates on the go!
          </h2>
          <p className="text-muted">
            {" "}
            Just scan the given QR on your phone or visit the store on your
            mobile and search ‘Yocket’
          </p>
          <div className="row">
            <div className="col">
              <div class="app-icons pt-4">
                <a href="https://apps.apple.com/app/id1551353775">
                  <img
                    class="apple"
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
                    alt="Download on the App Store"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.stagescycling.stages">
                  <img
                    class="android"
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <img
                src="https://www.picng.com/upload/qr_code/png_qr_code_67714.png"
                alt="abc"
                height={120}
                width={120}
              />
              <p>Scan here to download</p>
            </div>
          </div>
        </div>

        <div
          className="col-6 card  bg-transparent"
          style={{
            border: "none",
          }}
        >
          <img
            src="https://d15yx0mnc9teae.cloudfront.net/sites/default/files/MSA-Home-Billing-Home-1920x1080-slant.png"
            alt="abc "
          />
        </div>
      </div>
    </div>
  );
}
