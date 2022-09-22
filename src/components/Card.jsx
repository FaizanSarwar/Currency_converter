import React from "react";
const Card = () => {
  return (
    <div className="">
      <div className="card">
        <ul className="cardproper">
          <li className="list-group-item">Convert</li>
          <li className="list-group-item">Send</li>
          <li className="list-group-item">Charts</li>
          <li className="list-group-item">Alerts</li>
        </ul>

        <div className="card-inputs">
          <div>
            <h6>Amount</h6>
            <input type="text" value="$1.00" className="inputs" />
          </div>
          <div>
            <h6>To</h6>
            <input type="text" value="$1.00" className="inputs" />
          </div>
          <div>
            <h6>From</h6>
            <input type="text" value="$1.00" className="inputs" />
            <button type="button" class="btn btn-primary convertbtn">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
