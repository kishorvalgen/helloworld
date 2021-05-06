import React, { Component } from "react";
import UpdatedComponent from "./counterOne";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
