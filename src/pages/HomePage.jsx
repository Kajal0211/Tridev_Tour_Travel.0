import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import "../styles/HomePage.css";

const images = {
  hero: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg",
  gangaAarti: "https://images.pexels.com/photos/28573945/pexels-photo-28573945.jpeg",
  charDham: "https://images.pexels.com/photos/17905659/pexels-photo-17905659.jpeg",
  varanasi: "https://images.pexels.com/photos/34738143/pexels-photo-34738143.jpeg",
  
};

const sections = [
  {
    key: "gangaAarti",
    title: "Ganga Aarti",
    desc: "Experience the mesmerizing evening prayers by the holy river Ganga.",
    bg: "https://images.pexels.com/photos/16781572/pexels-photo-16781572.jpeg",
    cards: [
      {
        name: "Har Ki Pauri",
        location: "Haridwar",
        image:"https://images.pexels.com/photos/8171698/pexels-photo-8171698.jpeg",
        description: "Iconic ghat, main spot for evening Aarti.",
        rating: 4.9,
      },
      {
        name: "Triveni Ghat",
        location: "Rishikesh",
        image: "https://images.pexels.com/photos/27271177/pexels-photo-27271177.jpeg",
        description: "Spiritual Ghat on the holy Ganga.",
        rating: 4.8,
      },
    ],
  },
  {
    key: "charDham",
    title: "Char Dham Yatra",
    desc: "Breathtaking Himalayan journey, sacred peaks, snow and spirituality.",
    bg: "https://images.pexels.com/photos/15897511/pexels-photo-15897511.jpeg",
    cards: [
      {
        name: "Kedarnath",
        location: " Uttarakhand",
        image: "https://images.pexels.com/photos/8343731/pexels-photo-8343731.jpeg",
        description: "Temple in snow-capped peaks.",
        rating: 4.8,
      },
      {
        name: "Badrinath",
        location: "Uttarakhand",
        image: "https://images.pexels.com/photos/19019326/pexels-photo-19019326.jpeg",
        description: "Sacred temple town near Neelkanth snow peak.",
        rating: 4.9,
      },
      {
        name: "Yamunotri",
        location: "Uttarakhand",
        image: "https://images.pexels.com/photos/34245073/pexels-photo-34245073.jpeg",
        description: "Home of Goddess Yamuna.",
        rating: 4.7,
      },
      {
        name: "Gangotri",
        location: "Uttarkashi",
        image: "https://images.pexels.com/photos/17008126/pexels-photo-17008126.jpeg",
        description: "Origin of the sacred river Ganga.",
        rating: 4.8,
      },
    ],
  },
  {
    key: "varanasi",
    title: "Varanasi Temples",
    desc: "Discover spiritual beauty of Varanasi's ancient temples and ghats at dusk.",
    bg: "https://images.pexels.com/photos/34741303/pexels-photo-34741303.jpeg",
    cards: [
      {
        name: "Kashi Vishwanath",
        location: "Varanasi, UP",
        image: "https://images.pexels.com/photos/2725253/pexels-photo-2725253.jpeg",
        description: "One of the most famous and ancient temples.",
        rating: 4.9,
      },
      {
        name: "Dashashwamedh Ghat",
        location: "Varanasi, UP",
        image: "https://images.pexels.com/photos/31602871/pexels-photo-31602871.jpeg",
        description: "Most prominent ghat for Aarti.",
        rating: 4.8,
      },
      {
        name: "Assi Ghat",
        location: "Varanasi, UP",
        image: "https://images.pexels.com/photos/30685065/pexels-photo-30685065.jpeg",
        description: "Famous for sunrise, saints & music.",
        rating: 4.7,
      },
    ],
  }
];

export default function HomePage() {
  return (
    <div className="home-bg">
      <div
        className="main-hero"
        style={{
          backgroundImage: `linear-gradient(120deg,rgba(255,204,0,.3),rgba(0,40,80,0.55)), url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="hero-glass-card">
          <h1>
            <span style={{ color: "#19afe0", fontWeight: 900 }}>Tridev</span>
            <span style={{ color: "#ffc62b", fontWeight: 900 }}>
              {" "}
             Tridev Travel Agency
            </span>
          </h1>
          <p>Experience a Sacred Journey & Discover North India's Wonders</p>
        </div>
      </div>

      {sections.map((section) => (
        <section
          key={section.key}
          className={`destination-section ${section.key}`}
          style={{
            backgroundImage: `linear-gradient(120deg,rgba(44,38,20,0.12),rgba(30,58,138,0.18)), url(${section.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "65px 0",
          }}
        >
          <div className="container">
            <h2>{section.title}</h2>
            <p>{section.desc}</p>
            <div className="cards-strip">
              {section.cards.map((dest, i) => (
                <DestinationCard key={i} destination={dest} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
