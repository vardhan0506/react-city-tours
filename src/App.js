import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/Tourlist/Tourlist";
import "./App.scss";

class App extends Component {
  render() {
    console.log("in app class");
    return (
      <div>
        <Navbar />
        <Tourlist />
      </div>
    );
  }
}

export default App;
