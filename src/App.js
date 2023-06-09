import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Cenik } from "./Packages/cenik";
import { Fotky } from "./Packages/fotky";
import { Ubytovani } from "./Packages/ubytovani";
import { Kontakty } from "./Packages/kontakty";
import { Home } from "./Packages/home";
import { Helmet } from 'react-helmet';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function App() {
  return (
    <>
   <Helmet>
        <title>Chata U Kutnárů</title>
      </Helmet>
      <div id="page">
        <Navbar bg="success" variant="dark" >
          <Container id ="navbarcontainer" >
            <Navbar.Brand href="/">
              <div id="titleInAppjs">Chata <br></br>U Kutnárů</div>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/ubytovani">Ubytovani</Nav.Link>
              <Nav.Link href="/fotky">Fotografie</Nav.Link>
              <Nav.Link href="/cenik">Ceník</Nav.Link>
              <Nav.Link href="/kontakty">Kontakty</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/fotky" element={<Fotky />} />
          <Route path="/ubytovani" element={<Ubytovani />} />{" "}
          <Route path="/kontakty" element={<Kontakty />} />
        </Routes>
        <div id="footer">
          <MDBFooter
            className="text-center text-white "
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: "#198754" }}
            >
              <p>
                <b>Chata U Kutnárů</b>
                <br></br>
                tel.: +420 731 556 023<br></br>
                Adresa: Hradčany 431 471 24 Ralsko
              </p>
            </div>
          </MDBFooter>
        </div>
      </div>
    </>
  );
}

export default App;
