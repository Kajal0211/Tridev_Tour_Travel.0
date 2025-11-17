import React from "react";
import "./HeroSection.css";

const HERO_IMG = "https://images.unsplash.com/photo-1529688530642-3c0c7f07d5ae?auto=format&fit=crop&w=1920&q=80";

const HeroSection = () => (
  <section className="hero-section" style={{
    backgroundImage: `linear-gradient(110deg, rgba(255, 204, 0, 0.6), rgba(30, 58, 138, 0.7)), url(${HERO_IMG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }}>
    <div className="hero-glass-card">
      <h1>Tridev <span className="accent">Travel Agency</span></h1>
      <p>Experience a Sacred Journey & Discover North India's Wonders</p>
    </div>
  </section>
);

export default HeroSection;
