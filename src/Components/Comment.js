import React, { Component } from "react";
import he from "he";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "./Comment.css";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";

class Comment extends Component {
  renderChildrenEvt = (event) => {
    event.preventDefault();
    this.renderChildren();
  };

  renderChildren = (kids) => {
    return (
      <div className="comment-children">
        <CommentList comments={kids} />
      </div>
    );
  };

  render() {
    const { time, by, parent, text } = this.props.comment;
    let decodedText;
    const kids = this.props.comment.kids ? this.props.comment.kids : [];

    if (text) {
      decodedText = he.decode(text);
    }

    return (
      <div className="comment">
        <div className="left-content"></div>

        <div className="right">
          <div className="right-content">
            <h4 className="user-name">
              <Link to={`/user?id=${by}`}>{by}</Link>
            </h4>
            <p className="detail">
              {moment.unix(time).fromNow()} |{" "}
              <span>
                <Link to={`/item?id=${parent}`}>Parent</Link>
              </span>
            </p>
            <p
              className="comment-text"
              dangerouslySetInnerHTML={{ __html: decodedText }}
            ></p>
          </div>
          {kids.length > 0 ? (
            <div>
              <FontAwesomeIcon
                icon={faCaretDown}
                size="lg"
                className="down-caret"
              />
            </div>
          ) : (
            ""
          )}
          {kids ? this.renderChildren(kids) : ""}
        </div>
      </div>
    );
  }
}

export default Comment;
