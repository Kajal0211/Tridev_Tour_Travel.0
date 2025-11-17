import React, { useState } from 'react';
import { FaHistory, FaUser } from 'react-icons/fa';
import '../styles/Dashboard.css';

const dashboardBg = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80";
const infoImage = "https://images.unsplash.com/photo-1465311444968-f44f8155c9d4?auto=format&fit=crop&w=700&q=80";

const Dashboard = ({ user }) => {
  const [bookings] = useState([
    {
      id: 1,
      type: 'Package',
      name: 'Golden Temple Special',
      date: '2025-12-15',
      status: 'Confirmed',
      price: '₹8,999'
    },
    {
      id: 2,
      type: 'Taxi',
      name: 'Haridwar to Hotel',
      date: '2025-12-16',
      status: 'Completed',
      price: '₹450'
    }
  ]);

  return (
    <div style={{
      backgroundImage: `linear-gradient(110deg,rgba(30,42,88,0.7),rgba(30,58,138,0.5)), url(${dashboardBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      width: "100vw",
      paddingTop: "80px",
      boxSizing: "border-box",
      color: "#fff",
    }}>
      <div className="dashboard-page" style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>

        <div className="dashboard-header" style={{ marginBottom: '30px' }}>
          <h1>My Dashboard</h1>
          <p>Welcome, {user?.name || 'Guest'}!</p>
        </div>

        {/* Image addition */}
        <div style={{
          maxWidth: '360px',
          marginBottom: '40px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        }}>
          <img src={infoImage} alt="Spiritual scenery" style={{ width: '100%', display: 'block' }} />
        </div>

        <div className="container">
          <div className="dashboard-grid">
            <div className="dashboard-card profile-card">
              <div className="card-header">
                <FaUser /> Profile
              </div>
              <div className="card-content">
                <p><strong>Name:</strong> {user?.name || 'Not provided'}</p>
                <p><strong>Email:</strong> {user?.email || 'Not provided'}</p>
                <p><strong>Phone:</strong> {user?.phone || 'Not provided'}</p>
              </div>
            </div>

            <div className="dashboard-card bookings-card">
              <div className="card-header">
                <FaHistory /> Recent Bookings
              </div>
              <div className="card-content">
                {bookings.map(booking => (
                  <div key={booking.id} className="booking-item">
                    <div className="booking-info">
                      <h4>{booking.name}</h4>
                      <p className="booking-type">{booking.type} • {booking.date}</p>
                    </div>
                    <div className="booking-status">
                      <span className={`status ${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                      <p className="booking-price">{booking.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
