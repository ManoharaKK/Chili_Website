import nodemailer from 'nodemailer';

/**
 * Email Service
 * Handles sending emails using Nodemailer
 * Supports multiple email providers (Gmail, SendGrid, custom SMTP)
 */

// Create reusable transporter
let transporter = null;

/**
 * Initialize email transporter based on environment variables
 */
function getTransporter() {
  if (transporter) {
    return transporter;
  }

  // Check which email service to use (default to gmail with hardcoded credentials)
  const emailService = process.env.EMAIL_SERVICE || 'gmail';

  switch (emailService.toLowerCase()) {
    case 'gmail':
      // Gmail configuration with hardcoded credentials
      // Try port 465 with SSL first (more reliable)
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'kavinda@gmail.com',
          pass: 'Kavindamanohara123##$#'
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      break;

    case 'sendgrid':
      // SendGrid configuration
      transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        }
      });
      break;

    case 'smtp':
    default:
      // Custom SMTP configuration
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        },
        tls: {
          rejectUnauthorized: process.env.NODE_ENV === 'production'
        }
      });
      break;
  }

  return transporter;
}

/**
 * Send email function
 * @param {Object} emailData - Email data object
 * @param {string} emailData.to - Recipient email address
 * @param {string} emailData.from - Sender email address
 * @param {string} emailData.replyTo - Reply-to email address (optional)
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.text - Plain text version of email
 * @param {string} emailData.html - HTML version of email
 * @returns {Promise<Object>} - Email sending result
 */
export async function sendEmail(emailData) {
  try {
    const transporter = getTransporter();

    // Try to verify transporter (optional - sometimes fails even when sending works)
    try {
      await transporter.verify();
      console.log('Email server is ready to send messages');
    } catch (verifyError) {
      console.warn('Transporter verification failed, but will attempt to send:', verifyError.message);
    }

    // Send email
    const info = await transporter.sendMail({
      from: emailData.from || 'kavinda@gmail.com',
      to: emailData.to || 'kavindamanoharak@gmail.com',
      replyTo: emailData.replyTo,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html
    });

    console.log('Message sent: %s', info.messageId);
    
    return {
      success: true,
      messageId: info.messageId,
      response: info.response
    };

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);
    console.error('Error responseCode:', error.responseCode);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH' || error.responseCode === 535) {
      errorMessage = 'Email authentication failed. Please check your email credentials. Make sure you are using a Gmail App Password, not your regular password.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Could not connect to email server. Please check your internet connection.';
    } else if (error.responseCode === 534) {
      errorMessage = 'Authentication failed. Please verify your Gmail App Password is correct.';
    } else if (error.responseCode === 550) {
      errorMessage = 'Email address not found or access denied.';
    } else {
      errorMessage = `Email sending failed: ${error.message}`;
    }
    
    throw new Error(errorMessage);
  }
}

/**
 * Send multiple emails (bulk send)
 * @param {Array<Object>} emailsData - Array of email data objects
 * @returns {Promise<Array>} - Array of results
 */
export async function sendBulkEmails(emailsData) {
  const results = [];
  
  for (const emailData of emailsData) {
    try {
      const result = await sendEmail(emailData);
      results.push({ success: true, ...result });
    } catch (error) {
      results.push({ 
        success: false, 
        error: error.message,
        recipient: emailData.to 
      });
    }
  }
  
  return results;
}

/**
 * Test email configuration
 * Sends a test email to verify the setup
 */
export async function testEmailConfig(testRecipient) {
  try {
    const testEmail = {
      to: testRecipient,
      from: process.env.SENDER_EMAIL,
      subject: 'Test Email - Configuration Check',
      text: 'This is a test email to verify your email configuration is working correctly.',
      html: '<h1>Test Email</h1><p>This is a test email to verify your email configuration is working correctly.</p>'
    };

    const result = await sendEmail(testEmail);
    console.log('Test email sent successfully:', result);
    return result;

  } catch (error) {
    console.error('Test email failed:', error);
    throw error;
  }
}

// Export default
export default {
  sendEmail,
  sendBulkEmails,
  testEmailConfig
};