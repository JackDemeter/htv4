import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.jsx";
import Code from "./components/Code.jsx";
import ClassCounter from './components/ClassCounter.js'
import Require from "./components/Require.jsx"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HookCounter from "./components/HookCounter";


class App extends Component {

  render() {

    return (

        <div className="container-fluid" style={{backgroundColor: '#c8d6e5'}} >
          <Navbar/>
          <p></p>
         <Row sm = {{size:"auto", offset: 1}} > 
            <Col lg={{ size: "auto", offset: 0 }}> <Code name = "Code"/> </Col>
            <span>   <Col sm={{ size:'auto', offset: 0 }}> <Require name = "List"/> </Col>     </span>
          </Row>
        </div>  
    );
  }
}

export default App;