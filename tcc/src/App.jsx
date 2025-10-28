// src/App.jsx
import React from "react";
import Mapa from "./components/Mapa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        🏭 Mapa Virtual da Fábrica
      </h1>
      <Mapa />
      <Footer />
    </div>
  );
}

export default App;
