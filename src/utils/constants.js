// ==================== API & ENVIRONMENT ====================

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://tridev-tour-travel.onrender.com/api';
export const NODE_ENV = process.env.REACT_APP_NODE_ENV || 'development';

// ==================== PHONE NUMBERS ====================

export const PHONE_NUMBERS = {
  primary: '+919634347223',      // Red call button
  secondary: '+918800778189',     // Blue support button
  customer: '9634347223'          // Green WhatsApp
};

// ==================== COLORS ====================

export const COLORS = {
  primary: '#1e3a8a',             // Deep blue
  secondary: '#0f172a',           // Darker blue
  accent: '#fbbf24',              // Gold
  success: '#25d366',             // WhatsApp green
  error: '#ef4444',               // Red
  warning: '#f59e0b',             // Orange
  info: '#3b82f6',                // Light blue
  light: '#f8fafc',               // Light gray
  dark: '#1e293b',                // Dark text
  border: '#e2e8f0'               // Border gray
};

// ==================== DESTINATIONS ====================

export const NORTH_INDIA_DESTINATIONS = [
  'Amritsar (Golden Temple)',
  'Haridwar (Ganga Aarti)',
  'Varanasi (Sacred Temples)',
  'Uttarakhand (Char Dham)',
  'Rishikesh (Yoga Capital)',
  'Mathura (Krishna Temple)',
  'Agra (Taj Mahal)',
  'Delhi (National Capital)',
  'Chandigarh (Modern City)',
  'Shimla (Hill Station)',
  'Manali (Adventure Hub)',
  'Jaipur (Pink City)'
];

// ==================== PACKAGE TYPES ====================

export const PACKAGE_TYPES = {
  PILGRIMAGE: 'PILGRIMAGE',
  ADVENTURE: 'ADVENTURE',
  LUXURY: 'LUXURY',
  BUDGET: 'BUDGET',
  CHARDHAM: 'CHARDHAM',
  CULTURAL: 'CULTURAL'
};

// ==================== BOOKING STATUS ====================

export const BOOKING_STATUS = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

// ==================== VEHICLE TYPES ====================

export const VEHICLE_TYPES = {
  SEDAN: 'sedan',
  SUV: 'suv',
  TEMPO: 'tempo',
  BUS: 'bus',
  BIKE: 'bike'
};

// ==================== VEHICLE DETAILS ====================

export const VEHICLES_INFO = {
  sedan: {
    name: 'Sedan',
    seats: 4,
    rate: 12,
    icon: '🚗',
    description: 'Comfortable sedan for up to 4 passengers'
  },
  suv: {
    name: 'SUV',
    seats: 6,
    rate: 18,
    icon: '🚙',
    description: 'Spacious SUV for up to 6 passengers'
  },
  tempo: {
    name: 'Tempo Traveller',
    seats: 12,
    rate: 25,
    icon: '🚐',
    description: 'Large tempo traveller for up to 12 passengers'
  }
};

// ==================== ROUTES ====================

export const ROUTES = {
  HOME: '/tridev_tour_travelll',
  TRAVEL_PACKAGES: '/travel-packages',
  TAXI_SERVICES: '/taxi-services',
  DASHBOARD: '/dashboard',
  PAYMENT: '/payment',
  LOGIN: '/login',
  REGISTER: '/register',
  BOOKING_DETAILS: '/booking/:id',
  TRIP_HISTORY: '/trip-history'
};

// ==================== STORAGE KEYS ====================

export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  CART: 'cart',
  PREFERENCES: 'preferences',
  RECENTLY_VIEWED: 'recently_viewed'
};

// ==================== MESSAGES ====================

export const MESSAGES = {
  SUCCESS: {
    BOOKING_CREATED: 'Booking created successfully!',
    BOOKING_UPDATED: 'Booking updated successfully!',
    BOOKING_CANCELLED: 'Booking cancelled successfully!',
    LOGIN_SUCCESS: 'Login successful!',
    REGISTRATION_SUCCESS: 'Registration successful!',
    PROFILE_UPDATED: 'Profile updated successfully!'
  },
  ERROR: {
    BOOKING_FAILED: 'Failed to create booking. Please try again.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    PASSWORD_SHORT: 'Password must be at least 6 characters.',
    MISSING_FIELDS: 'Please fill all required fields.',
    SERVER_ERROR: 'Server error. Please try again later.',
    NETWORK_ERROR: 'Network error. Please check your internet connection.'
  },
  INFO: {
    LOADING: 'Loading...',
    PROCESSING: 'Processing your request...',
    NO_RESULTS: 'No results found.'
  }
};

// ==================== ANIMATION TIMINGS ====================

export const ANIMATIONS = {
  SPRING_TIMING: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  DURATION_FAST: '0.4s',
  DURATION_NORMAL: '0.7s',
  DURATION_SLOW: '1s',
  DURATION_SLOWER: '1.5s'
};

// ==================== DATE & TIME ====================

export const DATE_FORMATS = {
  LONG: 'YYYY-MM-DD',
  SHORT: 'DD/MM/YY',
  DISPLAY: 'DD MMMM YYYY'
};

export const TIME_FORMATS = {
  HH_MM: 'HH:mm',
  HH_MM_SS: 'HH:mm:ss'
};

// ==================== PAGINATION ====================

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  OPTIONS: [10, 20, 50, 100]
};

// ==================== VALIDATION ====================

export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[6-9]\d{9}$/,
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50
};

// ==================== CHAR DHAM TEMPLES ====================

export const CHAR_DHAM = [
  {
    name: 'Badrinath',
    location: 'Badrinath, Uttarakhand',
    elevation: 3300,
    description: 'Dedicated to Lord Vishnu, one of the holiest temples'
  },
  {
    name: 'Kedarnath',
    location: 'Kedarnath, Uttarakhand',
    elevation: 3583,
    description: 'Dedicated to Lord Shiva, located at high altitude'
  },
  {
    name: 'Yamunotri',
    location: 'Yamunotri, Uttarakhand',
    elevation: 3291,
    description: 'Source of River Yamuna, sacred pilgrimage site'
  },
  {
    name: 'Gangotri',
    location: 'Gangotri, Uttarakhand',
    elevation: 3100,
    description: 'Source of River Ganges, holiest pilgrimage site'
  }
];

// ==================== FEATURED DESTINATIONS ====================

export const FEATURED_DESTINATIONS = [
  {
    id: 1,
    name: 'Golden Temple',
    city: 'Amritsar',
    state: 'Punjab',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523'
  },
  {
    id: 2,
    name: 'Ganga Aarti',
    city: 'Haridwar',
    state: 'Uttarakhand',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599507593476-943b2e49b695'
  },
  {
    id: 3,
    name: 'Char Dham',
    city: 'Uttarakhand',
    state: 'Uttarakhand',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586303241243-24a41b1471ea'
  },
  {
    id: 4,
    name: 'Varanasi Temples',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586359036637-9b1f2c43e882'
  }
];

// ==================== SOCIAL LINKS ====================

export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/tridevtravel',
  INSTAGRAM: 'https://instagram.com/tridevtravel',
  TWITTER: 'https://twitter.com/tridevtravel',
  YOUTUBE: 'https://youtube.com/tridevtravel'
};

// ==================== TERMS & CONDITIONS ====================

export const TERMS = {
  CANCELLATION_DAYS: 7,
  REFUND_PERCENTAGE: 100,
  MINIMUM_BOOKING_AMOUNT: 1000
};

export default {
  API_BASE_URL,
  PHONE_NUMBERS,
  COLORS,
  DESTINATIONS: NORTH_INDIA_DESTINATIONS,
  PACKAGE_TYPES,
  BOOKING_STATUS,
  VEHICLE_TYPES,
  ROUTES,
  MESSAGES,
  CHAR_DHAM,
  FEATURED_DESTINATIONS
};