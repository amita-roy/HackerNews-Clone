import React, { Component } from "react";
import axios from "axios";
import LoadMore from "./LoadMore";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.axiosCancelSource = axios.CancelToken.source();

    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = (page = 0) => {
    this.setState({ isLoading: true }, () => {
      this.props
        .fetchData({ page, cancelToken: this.axiosCancelSource.token })
        .then((data) => {
          this.setState((prevState) => {
            return {
              page: page,
              data: [...prevState.data, ...data],
              isLoading: false,
            };
          });
        })
        .catch((err) => {});
    });
  };

  fetchNextPage = (event) => {
    event.preventDefault();
    const { page } = this.state;
    this.fetchArticles(page + 1);
  };
  componentWillUnmount() {
    this.axiosCancelSource.cancel("Component unmounted.");
  }

  render() {
    const { ItemRender } = this.props;

    return (
      <div>
        {this.state.data.filter(Boolean).map((singleData) => (
          <ItemRender data={singleData} key={singleData.id} />
        ))}
        <LoadMore
          fetchNextPage={this.fetchNextPage}
          isLoading={this.state.isLoading}
          more={true}
        />
      </div>
    );
  }
  s;
}

export default NewsList;
