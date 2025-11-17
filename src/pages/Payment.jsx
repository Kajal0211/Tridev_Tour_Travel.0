import React, { useState } from 'react';

const paymentBg = "https://images.pexels.com/photos/5650028/pexels-photo-5650028.jpeg";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Payment of ₹${paymentData.amount} submitted successfully for ${paymentData.fullName}`);
    // Add your payment processing logic here
  };

  return (
    <div style={{
      backgroundImage: `linear-gradient(110deg,rgba(50,90,58,0.7),rgba(183,156,104,0.18)), url(${paymentBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100vw',
      paddingTop: '80px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.65)',
        padding: '40px',
        borderRadius: '16px',
        maxWidth: '460px',
        width: '90%',
        boxShadow: '0 0 30px rgba(0,0,0,0.95)',
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={paymentData.fullName} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          <label>Card Number</label>
          <input 
            type="text" 
            name="cardNumber"
            maxLength="16"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required 
            style={inputStyle} 
          />
          <label>Expiry Date (MM/YY)</label>
          <input 
            type="text" 
            name="expiryDate" 
            maxLength="5"
            placeholder="MM/YY"
            value={paymentData.expiryDate}
            onChange={handleChange}
            required 
            style={inputStyle} 
          />
          <label>CVV</label>
          <input 
            type="password"
            name="cvv" 
            maxLength="3"
            value={paymentData.cvv} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          <label>Amount (₹)</label>
          <input 
            type="number" 
            name="amount" 
            value={paymentData.amount} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          <button type="submit" style={buttonStyle}>Pay Now</button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  marginTop: '5px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  fontWeight: 'bold',
  borderRadius: '12px',
  backgroundColor: '#fdc651',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.1rem',
  color: '#5c4700',
};

export default Payment;
