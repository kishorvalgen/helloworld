import React, { Component } from "react";
import counterOne from "./counterOne";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Click {count} times
        </button>
      </div>
    );
  }
}

export default counterOne(ClickCounter, 5);
