import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./pages/Home/Homepage";

class App extends React.Component {
  render() {
    return <Homepage />;
  }
}

ReactDOM.render(<App />, document.querySelector("#sceneContainer"));
