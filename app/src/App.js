import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Code from "./components/Code.jsx";
import Require from "./components/Require.jsx"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class App extends Component {
  render() {
    return (
        <div className="container">
          <Navbar />
          <Row>
            <Col sm={{ size: 'auto', offset: 0 }}> <Code name = "Code"/> </Col>
            <Col sm={{ size: 'auto', offset: 1 }}> <Require name = "List"/> </Col>
            <Col> </Col>

          </Row>
          
        </div>  
    );
  }
}

export default App;