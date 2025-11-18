import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/+91 88007 78189?text=Hi, I need help with travel booking';
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h4>Tridev Travel Support</h4>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="chat-body">
            <p>Hi! 👋 How can we help you today?</p>
            <button className="chat-action" onClick={handleWhatsApp}>
              <FaWhatsapp /> Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button 
          className="chat-fab"
          onClick={() => setIsOpen(true)}
        >
          <FaWhatsapp />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
