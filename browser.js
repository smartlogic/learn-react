/* @flow */

import React from "react";

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  var element = document.getElementById("app");
  React.render(<HelloWorld />, element);
});
