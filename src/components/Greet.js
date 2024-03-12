import React, { Component } from "react";

class Greet extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    const handleChange = (e) => {
      let val = e.target.value;
      this.setState({ value: val });
    };
    return (
      <>
        <p>Enter your name:</p>
        <input onChange={handleChange} type="text" /><br/>
        {this.state.value ? <p>Hello {this.state.value}!</p> : null}
      </>
    );
  }
}

export default Greet;
