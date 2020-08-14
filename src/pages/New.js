import React, { Component } from "react";
import * as NewsApi from "../api/news";
import NewsList from "../Components/NewsList";
import News from "../Components/News";

export class New extends Component {
  render() {
    return (
      <div>
        <h2>New Stories</h2>
        <NewsList fetchData={NewsApi.fetchNewArticles} ItemRender={News} />
      </div>
    );
  }
}

export default New;
