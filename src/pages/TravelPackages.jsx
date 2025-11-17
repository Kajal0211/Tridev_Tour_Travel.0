import React, { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import SearchBar from '../components/SearchBar.jsx';
import LoadingState from '../components/LoadingState.jsx';
import '../styles/TravelPackages.css';

const TravelPackages = ({ addNotification }) => {
  const [packages] = useState([
    {
      id: 1,
      name: 'Golden Temple Special',
      destination: 'Amritsar',
      duration: '3 Days',
      image: 'https://images.pexels.com/photos/5499900/pexels-photo-5499900.jpeg',
      rating: 4.8,
      reviews: 256,
    },
    {
      id: 2,
      name: 'Haridwar Spiritual',
      destination: 'Haridwar',
      duration: '4 Days',
      image: 'https://images.pexels.com/photos/19010052/pexels-photo-19010052.jpeg',
      rating: 4.9,
      reviews: 342,
    },
    {
      id: 3,
      name: 'Char Dham Yatra',
      destination: 'Uttarakhand',
      duration: '12 Days',
      image: 'https://images.pexels.com/photos/34132758/pexels-photo-34132758.jpeg',
      rating: 4.7,
      reviews: 189,
    },
    {
      id: 4,
      name: 'Varanasi Exploration',
      destination: 'Varanasi',
      duration: '5 Days',
      image: 'https://images.pexels.com/photos/34696572/pexels-photo-34696572.jpeg',
      rating: 4.8,
      reviews: 267,
    },
  ]);
  const [filteredPackages, setFilteredPackages] = useState(packages);

  const handleSearch = (query) => {
    const filtered = packages.filter(
      (pkg) =>
        pkg.name.toLowerCase().includes(query.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPackages(filtered);
  };

  const handleEnquire = (packageName) => {
    if (addNotification) addNotification(`Inquiry sent for ${packageName}!`, 'success');
    window.location.href = `https://wa.me/919634347223?text=I'm interested in ${packageName}`;
  };

  return (
    <div className="travel-packages-page">
      <div className="packages-hero">
        <h1>Discover Amazing Travel Packages</h1>
        <p>Explore North India's most sacred destinations</p>
      </div>
      <div className="container">
        <SearchBar onSearch={handleSearch} placeholder="Search packages..." />
        <div
          className="packages-grid-bg"
          style={{
            backgroundImage:
             ' https://images.pexels.com/photos/34717383/pexels-photo-34717383.jpeg',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '24px',
            borderRadius: '18px',
          }}
        >
          <div className="packages-grid">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <div key={pkg.id} className="package-card overlay-card">
                  <img src={pkg.image} alt={pkg.name} className="package-image-small" />
                  <div className="package-content-overlay">
                    <h3>{pkg.name}</h3>
                    <p className="package-meta">
                      <FaMapMarkerAlt /> {pkg.destination} • {pkg.duration}
                    </p>
                    <div className="package-rating">
                      <span className="rating-text">
                        {pkg.rating} ⭐ ({pkg.reviews} reviews)
                      </span>
                    </div>
                    <button className="enquire-btn-large" onClick={() => handleEnquire(pkg.name)}>
                      <FaWhatsapp /> Enquire Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <LoadingState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
