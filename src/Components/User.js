import React, { Component } from "react";
import he from "he";
import moment from "moment";

class User extends Component {
  render() {
    const { id, created, karma, about } = this.props.user;
    let decodedString;
    if (about) {
      decodedString = he.decode(about);
    }

    return (
      <div>
        <h2>{id}</h2>
        <p>Created at: {moment.unix(created).fromNow()}</p>
        <p>Karma: {karma}</p>
        {about ? (
          <p>
            About:{" "}
            <span dangerouslySetInnerHTML={{ __html: decodedString }}></span>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default User;
