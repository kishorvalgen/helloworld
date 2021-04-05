import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handlerUsernameChange = (evt) => {
    this.setState({
      username: evt.target.value,
    });
  };

  handlerCommentsChanges = (evt) => {
    this.setState({
      comments: evt.target.value,
    });
  };

  handlerTopicChange = (evt) => {
    this.setState({
      topic: evt.target.value,
    });
  };

  handlerSubmit = (evt) => {
    console.log(`${this.state.username}`);
    evt.preventDefault();
  };

  render() {
      const {username, comments, topic} = this.state
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={this.handlerUsernameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comments}
              onChange={this.handlerCommentsChanges}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handlerTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
