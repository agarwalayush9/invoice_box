import "./App.css";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import InvoiceState from "./context/invoice/InvoiceState";
import New from "./components/New";
import Update from "./components/Update";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AlertUI from "./components/AlertUI";
import React, { useState } from "react";
function App() {
  const [alert, setAlert] = useState({
    val: "success",
    msg: "message",
  });
  const [open, setOpen] = React.useState(false);
  const showAlert = (val, msg) => {
    setAlert({ val: val, msg: msg });
    setOpen(true);
    setTimeout(function () {
      setOpen(false);
    }, 2000);
  };
  return (
    <>
      <InvoiceState>
        <HashRouter>
          <Navbar header="invoice box" showAlert={showAlert} />
          <AlertUI open={open} alert={alert} />
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<New showAlert={showAlert} />} />
            <Route path="/update" element={<Update showAlert={showAlert}/>} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </HashRouter>
      </InvoiceState>
    </>
  );
}

export default App;
