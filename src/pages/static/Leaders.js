import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Leaders.css";

export class Leaders extends Component {
  render() {
    return (
      <div>
        <ol>
          <li className="leader">
            <Link to="/user?id=tptacek">tptacek</Link>
            <p className="leader-karma">
              Karma: <span>331088</span>
            </p>
          </li>

          <li className="leader">
            <Link to="/user?id=jacquesm">jacquesm</Link>
            <p className="leader-karma">
              Karma: <span>163005</span>
            </p>
          </li>

          <li className="leader">
            <Link to="/user?id=patio11">patio11</Link>
            <p className="leader-karma">
              Karma: <span>125416</span>
            </p>
          </li>

          <li className="leader">
            <Link to="/user?id=danso">danso</Link>
            <p className="leader-karma">
              Karma: <span>125076</span>
            </p>
          </li>

          <li className="leader">
            <Link to="/user?id=ingve">ingve</Link>
            <p className="leader-karma">
              Karma: <span>121038</span>
            </p>
          </li>

          <li className="leader">
            <Link to="/user?id=ColinWright">ColinWright</Link>
            <p className="leader-karma">
              Karma: <span>98391</span>
            </p>
          </li>

          <li className="leader">
            <Link to="/user?id=rayiner">rayiner</Link>
            <p className="leader-karma">
              Karma: <span>95086</span>
            </p>
          </li>
        </ol>

        <h5>and more...</h5>
      </div>
    );
  }
}

export default Leaders;
