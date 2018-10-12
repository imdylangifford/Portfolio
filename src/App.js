import React, { Component } from "react";
import Content from "./Components/Content/Content";
import Fade from "react-reveal/Fade";
import Whois from "./Components/Whois/Whois";
import Doro from "./Components/Doro/Doro";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <Whois />
        <Doro />
      </div>
    );
  }
}

export default App;
