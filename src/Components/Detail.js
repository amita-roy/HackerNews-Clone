import React, { Component } from "react";
import he from "he";
import Pluralize from "pluralize";
import moment from "moment";
import { getHostName } from "../utils/url";
import { Link } from "react-router-dom";

import "./Detail.css";

import CommentList from "./CommentList";

class Detail extends Component {
  removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, " ");
  };

  render() {
    const {
      title,
      by,
      score,
      time,
      url,
      id,
      descendants,
      text,
      kids,
    } = this.props.data;
    const hostName = getHostName(url);
    const pluralizePoints = Pluralize("point", score, true);
    const pluralizeComments = Pluralize("comment", descendants, true);
    let decodedText;
    if (text) {
      decodedText = he.decode(text);
    }

    return (
      <div className="detailPage">
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
              <span className={descendants ? "divider" : ""}></span>
              {descendants ? (
                <Link to={`/item?id=${id}`}>{pluralizeComments}</Link>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
        {text ? (
          <p
            className="detail-text"
            dangerouslySetInnerHTML={{ __html: decodedText }}
          ></p>
        ) : (
          ""
        )}
        <form method="POST" action={`/item?id=${id}`}>
          <textarea
            rows="8"
            cols="60"
            placeholder="Add your comment"
            className="textarea"
          ></textarea>

          <div className="button-div">
            <button type="submit" className="button">
              Add Comment
            </button>
          </div>
        </form>

        {kids ? <CommentList comments={kids} /> : ""}
      </div>
    );
  }
}

export default Detail;
