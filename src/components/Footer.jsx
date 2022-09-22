import React from "react";
const Footer = () => {
  return (
    <div className="">
      <div className="main-footer foot">
        <h2 className="d-flex justify-content-center mt-5 mb-3 footname">Currency Profile</h2>
        <div className="container ">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <ul className="footcol">
                <li>USD - US Dollar</li>
                <li>AUD - Australian Dollar</li>
                <li>CHF - Swiss Franc</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <ul className="footcol">
                <li>EUR - Euro</li>
                <li>JPY - Japanese Yen</li>
                <li>ZAR - South African Rand</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <ul className="footcol">
                <li>GBP - British Pound</li>
                <li>INR - Indian Rupee</li>
                <li>RUB - Russian Ruble</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <ul className="footcol">
                <li>CAD - Canadian Dollar</li>
                <li>NZD - New Zealand Dollar</li>
                <li>BGN - Bulgarian Lev</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Footer;
