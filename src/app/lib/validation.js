/**
 * Form Validation Utilities
 * Validates contact form data
 */

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone number validation regex (supports multiple formats)
 * Matches: +94771234567, 0771234567, 94771234567, etc.
 */
const PHONE_REGEX = /^(\+94|94|0)?[0-9]{9,10}$/;

/**
 * Validate email address
 * @param {string} email - Email address to validate
 * @returns {Object} - Validation result
 */
export function validateEmail(email) {
  if (!email || email.trim() === '') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }

  return { isValid: true };
}

/**
 * Validate name
 * @param {string} name - Name to validate
 * @returns {Object} - Validation result
 */
export function validateName(name) {
  if (!name || name.trim() === '') {
    return {
      isValid: false,
      error: 'Name is required'
    };
  }

  if (name.trim().length < 2) {
    return {
      isValid: false,
      error: 'Name must be at least 2 characters'
    };
  }

  if (name.trim().length > 100) {
    return {
      isValid: false,
      error: 'Name must be less than 100 characters'
    };
  }

  return { isValid: true };
}

/**
 * Validate phone number (optional field)
 * @param {string} phone - Phone number to validate
 * @returns {Object} - Validation result
 */
export function validatePhone(phone) {
  // Phone is optional, so empty is valid
  if (!phone || phone.trim() === '') {
    return { isValid: true };
  }

  // Remove spaces and dashes for validation
  const cleanPhone = phone.replace(/[\s-]/g, '');

  if (!PHONE_REGEX.test(cleanPhone)) {
    return {
      isValid: false,
      error: 'Please enter a valid phone number'
    };
  }

  return { isValid: true };
}

/**
 * Validate subject
 * @param {string} subject - Subject to validate
 * @returns {Object} - Validation result
 */
export function validateSubject(subject) {
  if (!subject || subject.trim() === '') {
    return {
      isValid: false,
      error: 'Subject is required'
    };
  }

  if (subject.trim().length < 3) {
    return {
      isValid: false,
      error: 'Subject must be at least 3 characters'
    };
  }

  if (subject.trim().length > 200) {
    return {
      isValid: false,
      error: 'Subject must be less than 200 characters'
    };
  }

  return { isValid: true };
}

/**
 * Validate message
 * @param {string} message - Message to validate
 * @returns {Object} - Validation result
 */
export function validateMessage(message) {
  if (!message || message.trim() === '') {
    return {
      isValid: false,
      error: 'Message is required'
    };
  }

  if (message.trim().length < 10) {
    return {
      isValid: false,
      error: 'Message must be at least 10 characters'
    };
  }

  if (message.trim().length > 5000) {
    return {
      isValid: false,
      error: 'Message must be less than 5000 characters'
    };
  }

  return { isValid: true };
}

/**
 * Sanitize input to prevent XSS attacks
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

/**
 * Validate entire form data
 * @param {Object} formData - Form data object
 * @returns {Object} - Validation result with all errors
 */
export function validateFormData(formData) {
  const errors = [];

  // Validate name
  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.push(nameValidation.error);
  }

  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.push(emailValidation.error);
  }

  // Validate phone (optional)
  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.push(phoneValidation.error);
  }

  // Validate subject
  const subjectValidation = validateSubject(formData.subject);
  if (!subjectValidation.isValid) {
    errors.push(subjectValidation.error);
  }

  // Validate message
  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.push(messageValidation.error);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Sanitize entire form data
 * @param {Object} formData - Form data object
 * @returns {Object} - Sanitized form data
 */
export function sanitizeFormData(formData) {
  return {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    phone: sanitizeInput(formData.phone),
    subject: sanitizeInput(formData.subject),
    message: sanitizeInput(formData.message)
  };
}

/**
 * Check for spam patterns
 * @param {Object} formData - Form data object
 * @returns {Object} - Spam check result
 */
export function checkSpam(formData) {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'prize', 'winner',
    'click here', 'buy now', 'limited time'
  ];

  const combinedText = `${formData.subject} ${formData.message}`.toLowerCase();

  const hasSpam = spamKeywords.some(keyword => combinedText.includes(keyword));

  // Check for excessive URLs
  const urlCount = (combinedText.match(/https?:\/\//g) || []).length;

  return {
    isSpam: hasSpam || urlCount > 3,
    reason: hasSpam ? 'Contains spam keywords' : urlCount > 3 ? 'Too many URLs' : null
  };
}

// Export all validation functions
export default {
  validateEmail,
  validateName,
  validatePhone,
  validateSubject,
  validateMessage,
  validateFormData,
  sanitizeInput,
  sanitizeFormData,
  checkSpam
};