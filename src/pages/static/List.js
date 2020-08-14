import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./List.css";

export class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="table">
          <p className="description">Users with most karma</p>
          <Link className="links" to="/leaders">
            Leaders
          </Link>
        </div>

        <div className="table">
          <p className="description">
            Front page submissions for a given day (e.g. 2016-06-20), ordered by
            time spent there
          </p>
          <Link className="links" to="/front">
            Front
          </Link>
        </div>

        <div className="table">
          <p className="description">Highest-voted recent links</p>
          <Link className="links" to="/best">
            Best
          </Link>
        </div>

        <div className="table">
          <p className="description">Most active current discussions</p>
          <Link className="links" to="/best">
            Active
          </Link>
        </div>

        <div className="table">
          <p className="description">Highest-voted recent comments</p>
          <Link className="links" to="">
            Best Comments
          </Link>
        </div>

        <div className="table">
          <p className="description">Submissions from new accounts</p>
          <Link className="links" to="/newest">
            Noon Stories
          </Link>
        </div>

        <div className="table">
          <p className="description">Comments from new accounts</p>
          <Link className="links" to="">
            Noob Comments
          </Link>
        </div>
      </div>
    );
  }
}

export default List;
