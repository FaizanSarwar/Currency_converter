import React from "react";
const Nav = () => {
  return (
    <div className="container">
    <div className="maindiv">
      <div className="left">
        <li className="nav-item me-3">
          <a className="nav-link nv" aria-current="page" href="#">
           Personal
          </a>
        </li>
        <div class="vl"></div>
        <li className="nav-item ms-3">
          <a className="nav-link nv" href="#">
            Business
          </a>
        </li>
      </div>

      <div className="center">
        <li className="nav-item me-3">
          <a className="nav-link nv" aria-current="page" href="#">
          Send Money
          </a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link nv" href="#">
            Converter
          </a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link nv" href="#">
          Currency API
          </a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link nv" href="#">
            Tools
          </a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link nv" href="#">
            Resources
          </a>
        </li>
      </div>

      <div className="right">
        <li className="nav-item ms-3 mt-3">
          <a className="nav-link nv" href="#">
            Sign In
          </a>
        </li>
        <li className="nav-item ms-3 mt-3">
        <button type="button" class="btn btn-primary nv"> Register</button>
         
        </li>
      </div>
    </div>
    </div>
  );
};
export default Nav;
