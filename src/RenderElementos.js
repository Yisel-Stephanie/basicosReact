import React, { Component } from "react";

export default class RenderElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["primavera", "invierno", "verano", "otoño"]
    };
  }

  render() {
    return (
      <>
        <h2>Elementos</h2>
        <ol>
          {this.state.seasons.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
      </>
    );
  }
}
