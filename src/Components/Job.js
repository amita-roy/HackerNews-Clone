import React, { Component } from "react";
import moment from "moment";
import { getHostName } from "../utils/url";

import "./sharedStyle.css";
import { Link } from "react-router-dom";

class Job extends Component {
  render() {
    const { title, time, url, id } = this.props.data;
    const hostName = getHostName(url);
    return (
      <div className="display">
        <div>
          <a href={url} target="blank" className="title">
            {title}
            {hostName && <span className="hostname">({hostName})</span>}
          </a>
          <p className="detail">
            <Link to={`/item?id=${id}`}>{moment.unix(time).fromNow()}</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Job;
