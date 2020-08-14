import React, { Component } from "react";
import Pluralize from "pluralize";
import moment from "moment";
import { Link } from "react-router-dom";
import { getHostName } from "../utils/url";

class Show extends Component {
  render() {
    const { title, by, score, time, url, id, descendants } = this.props.data;
    const hostName = getHostName(url);
    const pluralizePoints = Pluralize("point", score, true);
    const pluralizeComments = Pluralize("comment", descendants, true);
    return (
      <div className="display">
        <div>
          <a
            href={url ? url : `/item?id=${id}`}
            target="blank"
            className="title"
          >
            {title}
            {hostName && <span className="hostname">({hostName})</span>}
          </a>
          <p className="detail">
            {pluralizePoints} by <Link to={`/user?id=${by}`}>{by}</Link>{" "}
            <Link to={`/item?id=${id}`}>{moment.unix(time).fromNow()}</Link>
            <span className={descendants ? "divider" : null}></span>
            {descendants ? (
              <Link to={`/item?id=${id}`}>{pluralizeComments}</Link>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default Show;
