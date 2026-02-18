import { NextResponse } from 'next/server';
import { validateFormData } from '../../lib/validation.js';
import { sendEmail } from '../../lib/mail.js';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Transform form data to match validation structure
    // Handle both form structures: firstName/lastName OR name
    const formDataForValidation = {
      name: body.name || `${body.firstName || ''} ${body.lastName || ''}`.trim(),
      email: body.email,
      phone: body.phone || '',
      subject: body.subject || 'Contact Form Submission',
      message: body.message
    };
    
    // Validate the form data
    const validation = validateFormData(formDataForValidation);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = formDataForValidation;

    // Prepare email content
    const emailData = {
      to: 'kavindamanoharak@gmail.com',
      from: 'kavinda@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 5px;
            }
            .header {
              background-color: #2563eb;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              padding: 20px;
              background-color: #f9f9f9;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #2563eb;
            }
            .value {
              margin-top: 5px;
              padding: 10px;
              background-color: white;
              border-left: 3px solid #2563eb;
            }
            .footer {
              text-align: center;
              padding: 15px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Message</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your contact form</p>
              <p>Received on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent on: ${new Date().toLocaleString()}
      `
    };

    // Send the email
    await sendEmail(emailData);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error stack:', error.stack);
    
    // Extract error message
    const errorMessage = error.message || 'Failed to send email. Please try again later.';
    
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? {
          message: error.message,
          code: error.code,
          responseCode: error.responseCode,
          stack: error.stack
        } : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}