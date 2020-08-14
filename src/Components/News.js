import React, { Component } from "react";
import Pluralize from "pluralize";
import moment from "moment";
import { getHostName } from "../utils/url";
import { Link } from "react-router-dom";
import "./sharedStyle.css";

class News extends Component {
  render() {
    const { title, by, score, time, url, id, descendants } = this.props.data;
    const hostName = getHostName(url);
    const pluralizePoints = Pluralize("point", score, true);
    const pluralizeComments = Pluralize("comment", descendants, true);
    return (
      <div className="display">
        <div>
          <Link to={url ? url : `/item?id=${id}`} className="title">
            {title}
            {hostName && <span className="hostname">({hostName})</span>}
          </Link>
          <p className="detail">
            {pluralizePoints} by <Link to={`/user?id=${by}`}>{by}</Link>{" "}
            <Link to={`/item?id=${id}`}>{moment.unix(time).fromNow()}</Link>
            <span className="divider"></span>
            <a href={`https://www.google.com/search?q=${title}`}>web</a>
            <span className="divider"></span>
            <a href={`https://hn.algolia.com/?query=${title}`}>past</a>
            <span className="divider"></span>
            <Link to={`/item?id=${id}`}>discuss</Link>
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

export default News;
