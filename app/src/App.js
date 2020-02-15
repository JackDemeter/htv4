import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Code from "./components/Code.js";
import List from "./components/List.js";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListComp from  './listcomp';



class App extends Component {
  render() {
    return (
        <div className="container">
          <Navbar />
          <Row>
            <Col sm={{ size: 'auto', offset: 0 }}> <Code/> </Col>
            <Col sm={{ size: 'auto', offset: 1 }}> <List/> </Col>
            <Col> </Col>

          </Row>
          
        </div>  
    );
  }
}

export default App;