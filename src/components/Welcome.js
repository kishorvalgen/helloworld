import React, {Component} from 'react'

class Welcome extends Component {
  render() {
    const { name, nikName } = this.props;
    return (
      <h1>Welcome {name} a.k.a {nikName}</h1>
    );
  }
}

export default Welcome