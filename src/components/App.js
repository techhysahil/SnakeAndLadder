import React from "react";
import "../stylesheets/main.scss";

import Start from "./Start";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="game-container">
        <Start />
      </div>
    );
  }
}
