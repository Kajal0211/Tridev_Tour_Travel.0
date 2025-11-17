import axios from 'axios';

// Create axios instance with base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://tridev-tour-travel.onrender.com/api';


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor - add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// ==================== TRAVEL ENDPOINTS ====================

export const travelAPI = {
  // Get all packages
  getPackages: () => apiClient.get('/travel/packages'),
  
  // Get single package by ID
  getPackageById: (id) => apiClient.get(`/travel/packages/${id}`),
  
  // Get all destinations
  getDestinations: () => apiClient.get('/travel/destinations'),
  
  // Search packages
  searchPackages: (query, destination, budget) => 
    apiClient.post('/travel/search', { query, destination, budget }),
  
  // Get Char Dham packages
  get4DhamPackages: () => apiClient.get('/travel/4dham'),
  
  // Get packages by destination
  getPackagesByDestination: (destination) => 
    apiClient.get(`/travel/destination/${destination}`)
};

// ==================== TAXI ENDPOINTS ====================

export const taxiAPI = {
  // Get all vehicles
  getVehicles: () => apiClient.get('/taxi/vehicles'),
  
  // Get fare estimate
  getEstimate: (pickupLat, pickupLng, dropoffLat, dropoffLng, vehicleType) => 
    apiClient.post('/taxi/estimate', { 
      pickupLat, pickupLng, dropoffLat, dropoffLng, vehicleType 
    }),
  
  // Book taxi
  bookTaxi: (bookingData) => 
    apiClient.post('/taxi/book', bookingData),
  
  // Get taxi booking details
  getTaxiBooking: (bookingId) => 
    apiClient.get(`/taxi/booking/${bookingId}`)
};

// ==================== BOOKING ENDPOINTS ====================

export const bookingAPI = {
  // Create new booking
  createBooking: (bookingData) => 
    apiClient.post('/bookings', bookingData),
  
  // Get user bookings
  getUserBookings: (userId) => 
    apiClient.get(`/bookings/${userId}`),
  
  // Get booking details
  getBookingDetails: (bookingId) => 
    apiClient.get(`/bookings/details/${bookingId}`),
  
  // Update booking
  updateBooking: (bookingId, bookingData) => 
    apiClient.put(`/bookings/${bookingId}`, bookingData),
  
  // Cancel booking
  cancelBooking: (bookingId) => 
    apiClient.delete(`/bookings/${bookingId}`)
};

// ==================== USER ENDPOINTS ====================

export const userAPI = {
  // Register user
  register: (userData) => 
    apiClient.post('/users/register', userData),
  
  // Login user
  login: (email, password) => 
    apiClient.post('/users/login', { email, password }),
  
  // Get user profile
  getUserProfile: (userId) => 
    apiClient.get(`/users/${userId}`),
  
  // Update user profile
  updateProfile: (userId, userData) => 
    apiClient.put(`/users/${userId}`, userData)
};

// ==================== PAYMENT ENDPOINTS ====================

export const paymentAPI = {
  // Create payment
  createPayment: (paymentData) => 
    apiClient.post('/payments', paymentData),
  
  // Verify payment
  verifyPayment: (paymentId) => 
    apiClient.post(`/payments/verify/${paymentId}`),
  
  // Get payment status
  getPaymentStatus: (paymentId) => 
    apiClient.get(`/payments/${paymentId}`)
};

// ==================== ERROR HANDLING ====================

export const handleError = (error) => {
  if (error.response) {
    // Server responded with error status
    return {
      status: error.response.status,
      message: error.response.data?.message || 'Server error occurred',
      data: error.response.data
    };
  } else if (error.request) {
    // Request made but no response
    return {
      status: 0,
      message: 'No response from server. Please check your internet connection.',
      data: null
    };
  } else {
    // Error in request setup
    return {
      status: -1,
      message: error.message || 'An error occurred',
      data: null
    };
  }
};

// ==================== UTILITY FUNCTIONS ====================
// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format time
export const formatTime = (time) => {
  return new Date(time).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default apiClient;