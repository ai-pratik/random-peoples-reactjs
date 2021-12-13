import react, { useState } from "react";
import {
  Container,
  Row,
  Col,Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DataFetch from "./DataFetch"

import Mycard from "./Mycard"
const App = () => {
  return (
    <Container fluid className="p-5 bg-dark App">
      <h1 className="display-1 text-danger" align="center"> Random Peoples Info At Every Refresh</h1>
      <Row>
        <Col>
        
          <DataFetch/>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
