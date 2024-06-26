import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""}`} to="/about">
                About
              </Link>
            </li>
          </ul>


          {/* //Different Types Of Toggle Buttons..... */}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2 border border-light" onClick={() => { props.toggleStyle('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-2 border border-light" onClick={() => { props.toggleStyle('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-2 border border-light" onClick={() => { props.toggleStyle('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2 border border-light" onClick={() => { props.toggleStyle('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-light rounded mx-2 border border-light" onClick={() => { props.toggleStyle('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-dark rounded mx-2 border border-light" onClick={() => { props.toggleStyle('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            
          </div> */}

          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input onClick={props.toggleStyle}
              className="form-check-input"
              type="checkbox"
              role="switch" id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>

          </div>


        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
// Navbar.defaultProps = {
//     title: 'TextUtils',
//     about:'About'
//   };
