import React, { Component } from "react";

function Login() {
  return <div>login</div>;
}

function Logout() {
  return <div>logout</div>;
}

export default class RenderClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: false
    };
  }
  render() {
    return (
      <>
        <h2>Renderizado condicional clases</h2>
        {this.state.session ? <Login /> : <Logout />}
      </>
    );
  }
}
