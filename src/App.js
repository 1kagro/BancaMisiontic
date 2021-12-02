import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Registrarse from "./components/pages/Registrarse";
import Qr from "./components/pages/bvpQr";
import QrForm from "./components/pages/bvpQrForm";
import BuiTrans from "./components/pages/buiTransferir";
import BuiCan from "./components/pages/buiCancelar";
import BuiRes from "./components/pages/buiResponder";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/qrForm" element={<QrForm />} />
        <Route path="/buiTransferir" element={<BuiTrans />} />
        <Route path="/buiCambiarEstado" element={<BuiCan />} />
        <Route path="/buiResponder" element={<BuiRes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
