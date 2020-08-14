import React, { Component } from "react";
import * as NewsApi from "../api/news";
import NewsList from "../Components/NewsList";
import Top from "../Components/Top";

class TopPage extends Component {
  render() {
    return (
      <div>
        <h2>Top Stories</h2>
        <NewsList fetchData={NewsApi.fetchTopArticles} ItemRender={Top} />
      </div>
    );
  }
}

export default TopPage;
