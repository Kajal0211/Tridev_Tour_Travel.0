import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TravelPackages from './pages/TravelPackages';
import TaxiServices from './pages/TaxiServices';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';
import Navbar from './components/Navbar.jsx';
import ChatWidget from './components/ChatWidget.jsx';
import NotificationCenter from './components/NotificationCenter.jsx';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing user:', e);
      }
    }
  }, []);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications([...notifications, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Router basename="/tridev_tour_travel.0">
      <div className="app">
        <Navbar user={user} setUser={setUser} onLogout={handleLogout} />
        <NotificationCenter notifications={notifications} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/travel-packages" element={<TravelPackages addNotification={addNotification} />} />
            <Route path="/taxi-services" element={<TaxiServices addNotification={addNotification} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/payment" element={<Payment addNotification={addNotification} />} />
          </Routes>
        </main>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;