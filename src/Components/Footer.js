import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="links">
          <Link to="/newsguidelines">Guidlines</Link>

          <span className="divider"></span>

          <Link to="/newsfaq">FAQ</Link>

          <span className="divider"></span>

          <a href="mailto:hn@ycombinator.com">Support</a>

          <span className="divider"></span>

          <a href="https://github.com/HackerNews/API" target="blank">
            API
          </a>
          <span className="divider"></span>

          <Link to="/security">Security</Link>

          <span className="divider"></span>

          <Link to="/lists">List</Link>

          <span className="divider"></span>

          <Link to="/bookmarklet">Bookmarklet</Link>

          <span className="divider"></span>

          <a href="https://www.ycombinator.com/legal/" target="blank">
            Legal
          </a>

          <span className="divider"></span>

          <a href="https://www.ycombinator.com/apply/" target="blank">
            Apply to YC
          </a>

          <span className="divider"></span>

          <a href="mailto:hn@ycombinator.com">Contact</a>
        </div>
        <form className="searchForm" action="//hn.algolia.com/" method="get">
          <label htmlFor="search" className="search-label">
            Search:
          </label>
          <input name="q" type="text" id="search" />
        </form>
      </div>
    );
  }
}

export default Footer;
