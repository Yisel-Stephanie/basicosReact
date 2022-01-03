import React, { Component } from "react";

export default class Eventos extends Component {
  handleClick = (e) => {
    console.log("e", e);
    console.log("native event", e.nativeEvent);
    console.log("e tarhget", e.target);
    console.log("e.native.target", e.nativeEvent.target);
  };
  render() {
    return (
      <>
        <h2>Eventos</h2>
        <button onClick={this.handleClick}>CLICK ME</button>
      </>
    );
  }
}
