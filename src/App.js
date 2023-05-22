import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Cenik } from "./Packages/cenik";
import { Fotky } from "./Packages/fotky";
import { Info } from "./Packages/info";
import { Kontakty } from "./Packages/kontakty";
import { Home } from "./Packages/home";
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
  
      <div id="page">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Chata <br></br>U Kutnárů</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/info">O nás</Nav.Link>
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
          <Route path="/info" element={<Info />} />{" "}
          <Route path="/kontakty" element={<Kontakty />} />
        </Routes>
        <div id="footer">
       <MDBFooter className='text-center text-white ' style={{ backgroundColor: '#f1f1f1' }}>
    
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'lightgray' }}>
      <p><b>Chata U Kutnárů</b><br></br>
      tel.: +420 731 556 023<br></br>
      Adresa: Hradčany 431 
      471 24 Ralsko
      </p>
      </div>
    </MDBFooter>
        
        </div>
      </div>
    </>
  );
}

export default App;
