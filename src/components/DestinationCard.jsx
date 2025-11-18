import React from "react";
import "./DestinationCard.css";
import { FaStar } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const DestinationCard = ({ destination }) => (
  <div className="destination-card">
    <img src={destination.image} alt={destination.name} className="destination-img" />
    <div className="destination-details">
      <h4>{destination.name}</h4>
      <p className="destination-location"><MdLocationOn /> {destination.location}</p>
      <p>{destination.description}</p>
      <div className="destination-actions">
        <span className="destination-rating"><FaStar /> {destination.rating}</span>
        <button className="enquire-btn" onClick={() => window.open(`https://wa.me/+91 96343 47223?text=I'm interested in ${destination.name}`, "_blank")}>Enquire Now</button>
      </div>
    </div>
  </div>
);

export default DestinationCard;
