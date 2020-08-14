import React, { Component } from "react";
import "./LoadMore.css";

class LoadMore extends Component {
  render() {
    const nextPage = this.props.fetchNextPage;
    const more = this.props.more;

    return (
      <div>
        {this.props.isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <a href="#more" onClick={nextPage ? nextPage : null} className="more">
            {more ? "More..." : ""}
          </a>
        )}
      </div>
    );
  }
}

export default LoadMore;
