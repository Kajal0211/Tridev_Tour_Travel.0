import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaUsers, FaRupeeSign, FaWhatsapp } from "react-icons/fa";
import "../styles/TaxiServices.css";

const backgroundImg = "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg"; // 4K taxi, street or car at sunrise

const vehicles = [
  {
    type: "sedan",
    name: "Executive Sedan",
    seats: 4,
    rate: "₹12/km",
    image: "https://images.pexels.com/photos/34728863/pexels-photo-34728863.jpeg", // Modern sedan
  },
  {
    type: "suv",
    name: "Premium SUV",
    seats: 6,
    rate: "₹18/km",
    image: "https://images.pexels.com/photos/34716398/pexels-photo-34716398.jpeg", // High-end SUV
  },
  {
    type: "minibus",
    name: "Mountain Traveller",
    seats: 12,
    rate: "₹25/km",
    image: "https://images.pexels.com/photos/8585898/pexels-photo-8585898.jpeg", // Minibus, van
  },
];

const TaxiServices = ({ addNotification }) => {
  const [tripData, setTripData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicleType: "sedan",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleBooking = () => {
    if (!tripData.pickup || !tripData.dropoff || !tripData.date) {
      if (addNotification) addNotification("Please fill all fields", "error");
      return;
    }
    const message = `Taxi Booking:
Pickup: ${tripData.pickup}
Dropoff: ${tripData.dropoff}
Date: ${tripData.date}
Time: ${tripData.time}
Vehicle: ${tripData.vehicleType}`;
    window.location.href = `https://wa.me/919634435040?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className="taxi-services-page"
      style={{
        backgroundImage: `linear-gradient(110deg,rgba(30,42,88,0.7),rgba(30,58,138,0.5)), url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div className="taxi-hero">
        <h1>Book Your Ride</h1>
        <p>Fast, Safe & Reliable Taxi Services</p>
      </div>
      <div className="container">
        <div className="booking-section">
          <h2>Quick Booking</h2>
          <div className="booking-form">
            <div className="form-group">
              <label>
                <FaMapMarkerAlt /> Pickup Location
              </label>
              <input
                type="text"
                name="pickup"
                placeholder="Enter pickup location"
                value={tripData.pickup}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <FaMapMarkerAlt /> Dropoff Location
              </label>
              <input
                type="text"
                name="dropoff"
                placeholder="Enter dropoff location"
                value={tripData.dropoff}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <FaClock /> Date
              </label>
              <input type="date" name="date" value={tripData.date} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>
                <FaClock /> Time
              </label>
              <input type="time" name="time" value={tripData.time} onChange={handleInputChange} />
            </div>
          </div>
          <div className="vehicles-section">
            <h3>Select Vehicle</h3>
            <div className="vehicles-grid">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.type}
                  className={`vehicle-card ${
                    tripData.vehicleType === vehicle.type ? "selected" : ""
                  }`}
                  onClick={() =>
                    setTripData({ ...tripData, vehicleType: vehicle.type })
                  }
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="taxi-img"
                    style={{
                      width: "90%",
                      borderRadius: "8px",
                      margin: "10px auto",
                      boxShadow: "0 8px 24px #1840a644",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <h4>{vehicle.name}</h4>
                  <p>
                    <FaUsers /> {vehicle.seats} Seats
                  </p>
                  <p>
                    <FaRupeeSign /> {vehicle.rate}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="book-btn" onClick={handleBooking}>
            <FaWhatsapp /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxiServices;
