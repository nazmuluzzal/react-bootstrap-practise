import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import News from "./components/News/News";
import Header from "./components/Header/Header";
import TopHeadline from "./components/TopHeadline/TopHeadline";
import { Container, Row } from "react-bootstrap";
import Fragment from "./components/Fragment/Fragment";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header></Header>
          {/* <News></News> */}
          <Fragment></Fragment>
          <TopHeadline></TopHeadline>
        </Row>
      </Container>
    </div>
  );
}

export default App;
