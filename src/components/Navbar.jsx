import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setUser, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo fancy-title">
        <Link to="/">Tridev <span className="accent">Travel Agency</span></Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={location.pathname === "/travel-packages" ? "active" : ""}><Link to="/travel-packages">Packages</Link></li>
        <li className={location.pathname === "/taxi-services" ? "active" : ""}><Link to="/taxi-services">Taxi</Link></li>
        <li className={location.pathname === "/dashboard" ? "active" : ""}><Link to="/dashboard">Dashboard</Link></li>
        <li className={location.pathname === "/payment" ? "active" : ""}><Link to="/payment">Booking</Link></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-btn call-btn" onClick={() => window.location.href = "tel:import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setUser, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo fancy-title">
        <Link to="/">Tridev <span className="accent">Travel Agency</span></Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={location.pathname === "/travel-packages" ? "active" : ""}><Link to="/travel-packages">Packages</Link></li>
        <li className={location.pathname === "/taxi-services" ? "active" : ""}><Link to="/taxi-services">Taxi</Link></li>
        <li className={location.pathname === "/dashboard" ? "active" : ""}><Link to="/dashboard">Dashboard</Link></li>
        <li className={location.pathname === "/payment" ? "active" : ""}><Link to="/payment">Booking</Link></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-btn call-btn" onClick={() => window.location.href = "tel:919634347223"}>Call</button>
        <button className="nav-btn support-btn" onClick={() => window.location.href = "/"}>Support</button>
        <button className="nav-btn chat-btn" onClick={() => window.location.href = "https://wa.me/918800778189"}>Chat</button>
        {user && <button className="logout-btn" onClick={onLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;"}>Call</button>
        <button className="nav-btn support-btn" onClick={() => window.location.href = "/"}>Support</button>
        <button className="nav-btn chat-btn" onClick={() => window.location.href = "https://wa.me/918800778189"}>Chat</button>
        {user && <button className="logout-btn" onClick={onLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;
