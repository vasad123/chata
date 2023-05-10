import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cenik } from "./Packages/cenik";
import { Fotky } from "./Packages/fotky";
import { Info } from "./Packages/info";
import { Kontakty } from "./Packages/kontakty";
import { Lokace } from "./Packages/lokace";
import React from "react";
import GoogleMapReact from 'google-map-react';
function App() {
  return (
    <>
      <nav id="navBar">
        <span>Chata v Hradčanech</span>{" "}
        <div id="menu">
          <li><Link to  = "/info" id = "link">Info</Link> </li>
          <li><Link to = "/fotky" id = "link">Fotky</Link></li>
          <li><Link to = "/lokace" id = "link">Lokace</Link></li>
          <li><Link to = "/cenik" id = "link">Cena</Link></li>
          <li><Link to = "/kontakty" id = "link">Kontakty</Link></li>
        </div>
      </nav>

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
