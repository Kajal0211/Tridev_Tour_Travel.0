import React from 'react';
import { FaTimes, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import './NotificationCenter.css';

const NotificationCenter = ({ notifications }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'success': return <FaCheckCircle />;
      case 'error': return <FaExclamationCircle />;
      case 'info': return <FaInfoCircle />;
      default: return <FaInfoCircle />;
    }
  };

  return (
    <div className="notification-center">
      {notifications.map(notif => (
        <div key={notif.id} className={`notification ${notif.type}`}>
          <span className="notification-icon">{getIcon(notif.type)}</span>
          <span className="notification-message">{notif.message}</span>
        </div>
      ))}
    </div>
  );
};

export default NotificationCenter;
