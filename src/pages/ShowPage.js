import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as NewsApi from "../api/news";
import NewsList from "../Components/NewsList";

import Show from "../Components/Show";

class ShowPage extends Component {
  render() {
    return (
      <div>
        <h2>Show Stories</h2>
        <p className="paragraph">
          Please read the <Link to="/showhn">rules</Link>. You can also browse
          the <Link to="/newest">newest</Link> Show HNs.
        </p>
        <NewsList fetchData={NewsApi.fetchShow} ItemRender={Show} />
      </div>
    );
  }
}

export default ShowPage;
