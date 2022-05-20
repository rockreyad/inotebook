import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000 * 3);
  };
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container mx-auto sm:px-4">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<Login showAlert={showAlert} />} />
            <Route path="/sign-up" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
