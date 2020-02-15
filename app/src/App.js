import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Code from "./components/Code.js"

import Row from 'react-bootstrap/Row'

class App extends Component {
  render() {
    return (
        <div className="container">
          <Navbar />
          <Row>
            <Code />
            <Code />
          </Row>
        </div>  
    );
  }
}

export default App;