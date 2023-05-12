import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Cenik } from "./Packages/cenik";
import { Fotky } from "./Packages/fotky";
import { Info } from "./Packages/info";
import { Kontakty } from "./Packages/kontakty";
import { Lokace } from "./Packages/lokace";
import React from "react";
import GoogleMapReact from 'google-map-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chata</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/info">info</Nav.Link>
            <Nav.Link href="/fotky">Fotografie</Nav.Link>
            <Nav.Link href="/lokace">lokace</Nav.Link>¨
            <Nav.Link href="/cenik">ceník</Nav.Link>
            <Nav.Link href="/kontakty">kontakty</Nav.Link>
     
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/cenik" element={<Cenik />} />
        <Route path="/fotky" element={<Fotky />} />
        <Route path="/info" element={<Info />} />
        <Route path="/kontakty" element={<Kontakty />} />
        <Route path="/lokace" element={<Lokace />} />
      </Routes>
    </>
  );
}

export default App;
