import React, { Component } from "react";
import axios from "axios";

import Comment from "./Comment";
import { fetchDataById } from "../api/news";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.axiosCancelSource = axios.CancelToken.source();
    this.state = {
      page: 0,
      comments: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) {
      this.fetchComments();
    }
  }

  fetchComments = (page = 0) => {
    Promise.all(
      this.props.comments.map(fetchDataById(this.axiosCancelSource.token))
    )
      .then((data) => {
        this.setState((prevState) => {
          return {
            comments: [prevState.data, ...data],
          };
        });
      })
      .catch((err) => {});
  };

  componentWillUnmount() {
    this.axiosCancelSource.cancel("Component unmounted.");
  }

  render() {
    console.log();
    return (
      <div className="commentList">
        {this.state.comments.map((comment, index) =>
          comment ? <Comment comment={comment} key={index} /> : ""
        )}
      </div>
    );
  }
}

export default CommentList;
