import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as UserApi from "../api/user";
import LoadMore from "../Components/LoadMore";
import User from "../Components/User";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const param = new URLSearchParams(this.props.location.search);
    const id = param.get("id");

    this.setState({ isLoading: true }, () => {
      return UserApi.fetchUserById(id).then((user) =>
        this.setState({ user, isLoading: false })
      );
    });
  };

  render() {
    return (
      <div>
        <User user={this.state.user} />
        <LoadMore isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default withRouter(UserPage);
