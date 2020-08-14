import React, { Component } from "react";
import * as NewsApi from "../api/news";
import NewsList from "../Components/NewsList";
import Job from "../Components/Job";
import { Link } from "react-router-dom";

class Jobs extends Component {
  render() {
    return (
      <div>
        <h2>Jobs</h2>
        <p className="paragraph">
          These are jobs at YC startups. See more at{" "}
          <Link to="">Work at a Startup</Link>.
        </p>
        <NewsList fetchData={NewsApi.fetchJobs} ItemRender={Job} />
      </div>
    );
  }
}

export default Jobs;
