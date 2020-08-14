import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Detail from "../Components/Detail";
import { fetchDataById } from "../api/news";

export class StoryDetail extends Component {
  constructor(props) {
    super(props);
    this.axiosCancelSource = axios.CancelToken.source();
    this.state = {
      storyData: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const param = new URLSearchParams(this.props.location.search);
    const id = param.get("id");

    this.setState({ isLoading: true }, () => {
      return fetchDataById(this.axiosCancelSource.token)(id).then((storyData) =>
        this.setState({ storyData, isLoading: false })
      );
    });
  };

  componentWillUnmount() {
    this.axiosCancelSource.cancel("Component unmounted.");
  }

  render() {
    return (
      <div>
        <Detail data={this.state.storyData} />
      </div>
    );
  }
}

export default withRouter(StoryDetail);
