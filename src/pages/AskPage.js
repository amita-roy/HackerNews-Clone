import React, { Component } from "react";
import * as NewsApi from "../api/news";
import NewsList from "../Components/NewsList";
import Ask from "../Components/Ask";

export class AskPage extends Component {
  render() {
    return (
      <div>
        <h2>Ask</h2>
        <NewsList fetchData={NewsApi.fetchAskArticles} ItemRender={Ask} />
      </div>
    );
  }
}

export default AskPage;
