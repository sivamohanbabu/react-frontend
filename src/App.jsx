import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="active-link"
        >
          Contact
        </NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active-link">
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="nav-link"
          activeClassName="active-link"
        >
          Signup
        </NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
