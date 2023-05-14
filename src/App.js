import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Cenik } from "./Packages/cenik";
import { Fotky } from "./Packages/fotky";
import { Info } from "./Packages/info";
import { Kontakty } from "./Packages/kontakty";
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
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Chata</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/info">Info</Nav.Link>
              <Nav.Link href="/fotky">Fotografie</Nav.Link>
              <Nav.Link href="/cenik">Ceník</Nav.Link>
              <Nav.Link href="/kontakty">Kontakty</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{" "}
        <Routes>
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/fotky" element={<Fotky />} />
          <Route path="/info" element={<Info />} />{" "}
          <Route path="/kontakty" element={<Kontakty />} />
        </Routes>
        <div id="footer">
          <MDBFooter className="bg-dark text-center text-white">
            <MDBContainer className="p-4 pb-0">
              <section className="mb-4">
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="google" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </section>
            </MDBContainer>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2023 Chata:
              <a className="text-white" href="https://mdbootstrap.com/">
             chata.steinbach.cz
              </a>
            </div>
          </MDBFooter>
        </div>
      </div>
    </>
  );
}

export default App;
