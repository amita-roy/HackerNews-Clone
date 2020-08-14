import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <svg width="30" height="32" viewBox="0 0 414 416">
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(-621 -282)"
              >
                <g
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  transform="translate(621 282)"
                  fill="#f66605"
                  stroke="#fff"
                  strokeWidth="11"
                >
                  <rect width="414" height="416" stroke="none" />
                  <rect x="5.5" y="5.5" width="403" height="405" fill="none" />
                </g>
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M740,390h33.9l64.137,118.363L898.837,390h34.224L851.273,541.134V651.6H822.961V541.134Z"
                  transform="translate(-9 -31)"
                  fill="#fff"
                />
              </g>
            </svg>
            <h3>
              <Link to="/">Hacker News</Link>
            </h3>
          </div>

          <div className="links">
            <Link to="/newest">New</Link>
            <Link to="/ask">Ask</Link>
            <Link to="/show">Show</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/submit">Submit</Link>
          </div>
        </div>
        <div className="header-right">
          <button type="button" className="login">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
