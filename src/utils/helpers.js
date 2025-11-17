/**
 * Format currency to Indian Rupees
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Format date to readable format
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date string (DD MMM YYYY)
 */
export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Format time to HH:MM format
 * @param {string|Date} time - Time to format
 * @returns {string} Formatted time string (HH:MM)
 */
export const formatTime = (time) => {
  if (!time) return '';
  return new Date(time).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Format date and time together
 * @param {string|Date} dateTime - DateTime to format
 * @returns {string} Formatted datetime string
 */
export const formatDateTime = (dateTime) => {
  return `${formatDate(dateTime)} at ${formatTime(dateTime)}`;
};

// ==================== VALIDATION HELPERS ====================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with score and message
 */
export const validatePassword = (password) => {
  let score = 0;
  const feedback = [];

  if (password.length >= 8) score++;
  else feedback.push('At least 8 characters');

  if (/[A-Z]/.test(password)) score++;
  else feedback.push('At least one uppercase letter');

  if (/[a-z]/.test(password)) score++;
  else feedback.push('At least one lowercase letter');

  if (/[0-9]/.test(password)) score++;
  else feedback.push('At least one number');

  if (/[@$!%*?&]/.test(password)) score++;
  else feedback.push('At least one special character (@$!%*?&)');

  return {
    score,
    strength: score <= 2 ? 'weak' : score <= 4 ? 'medium' : 'strong',
    feedback
  };
};

/**
 * Validate required fields
 * @param {object} data - Object with fields to validate
 * @param {array} requiredFields - Array of required field names
 * @returns {object} Validation result with errors
 */
export const validateRequiredFields = (data, requiredFields) => {
  const errors = {};

  requiredFields.forEach(field => {
    if (!data[field] || data[field].toString().trim() === '') {
      errors[field] = `${field} is required`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// ==================== CALCULATION HELPERS ====================

/**
 * Calculate distance between two coordinates (Haversine formula)
 * @param {number} lat1, lon1 - First coordinate
 * @param {number} lat2, lon2 - Second coordinate
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Calculate taxi fare
 * @param {number} distance - Distance in km
 * @param {number} ratePerKm - Rate per km
 * @param {number} baseFare - Base fare (optional)
 * @returns {number} Calculated fare
 */
export const calculateTaxiFare = (distance, ratePerKm, baseFare = 50) => {
  return Math.round(baseFare + (distance * ratePerKm));
};

/**
 * Calculate total price with discount
 * @param {number} price - Original price
 * @param {number} discountPercentage - Discount percentage
 * @returns {number} Price after discount
 */
export const applyDiscount = (price, discountPercentage) => {
  return price - (price * discountPercentage / 100);
};

/**
 * Calculate number of days between two dates
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {number} Number of days
 */
export const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// ==================== STRING HELPERS ====================

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncate string to specified length
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated string with ellipsis
 */
export const truncateString = (str, length = 50) => {
  if (!str) return '';
  return str.length > length ? str.substring(0, length) + '...' : str;
};

/**
 * Convert string to slug format
 * @param {string} str - String to convert
 * @returns {string} Slug format string
 */
export const toSlug = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Generate random ID
 * @returns {string} Random ID
 */
export const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

// ==================== ARRAY HELPERS ====================

/**
 * Remove duplicates from array
 * @param {array} arr - Array to filter
 * @returns {array} Array without duplicates
 */
export const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

/**
 * Sort array of objects by property
 * @param {array} arr - Array to sort
 * @param {string} property - Property to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {array} Sorted array
 */
export const sortByProperty = (arr, property, order = 'asc') => {
  return [...arr].sort((a, b) => {
    if (a[property] < b[property]) return order === 'asc' ? -1 : 1;
    if (a[property] > b[property]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Group array of objects by property
 * @param {array} arr - Array to group
 * @param {string} property - Property to group by
 * @returns {object} Grouped object
 */
export const groupByProperty = (arr, property) => {
  return arr.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] = acc[key] || [];
    acc[key].push(obj);
    return acc;
  }, {});
};

// ==================== STORAGE HELPERS ====================

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 */
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Storage error:', error);
  }
};

/**
 * Get data from localStorage
 * @param {string} key - Storage key
 * @returns {any} Retrieved value or null
 */
export const getFromStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Storage error:', error);
    return null;
  }
};

/**
 * Remove data from localStorage
 * @param {string} key - Storage key
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Storage error:', error);
  }
};

/**
 * Clear all localStorage
 */
export const clearStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Storage error:', error);
  }
};

// ==================== DOM HELPERS ====================

/**
 * Scroll to element smoothly
 * @param {string} elementId - Element ID to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Scroll to top
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// ==================== COMMON UTILITY FUNCTIONS ====================

/**
 * Debounce function
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} Debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

/**
 * Throttle function
 * @param {function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {function} Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Deep clone object
 * @param {object} obj - Object to clone
 * @returns {object} Cloned object
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if object is empty
 * @param {object} obj - Object to check
 * @returns {boolean} True if empty
 */
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

export default {
  formatCurrency,
  formatDate,
  formatTime,
  isValidEmail,
  isValidPhone,
  validatePassword,
  calculateDistance,
  calculateTaxiFare,
  applyDiscount,
  capitalize,
  truncateString,
  toSlug,
  generateId,
  removeDuplicates,
  sortByProperty,
  groupByProperty,
  saveToStorage,
  getFromStorage,
  removeFromStorage,
  clearStorage,
  scrollToTop,
  debounce,
  throttle,
  deepClone
};