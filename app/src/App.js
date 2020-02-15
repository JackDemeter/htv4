import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Code from "./components/Code.js";
import List from "./components/List.js";
import ClassCounter from './components/ClassCounter.js'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HookCounter from "./components/HookCounter";




class App extends Component {

  render() {

    return (

        <div className="container">
            {/*<ClassCounter/> */}
            <HookCounter/>
        
          <Navbar/>
          <Row>
            <Col sm={{ size: 'auto', offset: 0}}> <Code/> </Col>
            <Col sm={{ size: 'auto', offset: 2}}> <List/> </Col>

          </Row>
        
        </div>  
    );
  }
}

export default App;