import React from "react";
import { Link } from "react-router-dom";
import "../styles/SuccessReg.css"

function SuccessReg() {
  return (
    <>
    <div className="backgroundCol"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="message-box _success">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <h2> Your register was successful </h2>
              <p>
                please <Link to="/login">log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default SuccessReg;
