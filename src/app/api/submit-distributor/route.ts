import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json()
        
        // Extract form data
        const {
            fullName,
            email,
            phone,
            area,
            businessBackground,
            cv
        } = formData

        // Validate required fields
        if (!fullName || fullName.trim() === '') {
            return NextResponse.json(
                { success: false, message: 'Full name is required' },
                { status: 400 }
            )
        }

        // Validate email format if provided
        const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (email && !isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Sanitize inputs for HTML (prevent XSS)
        const sanitize = (str: string) => {
            if (!str) return 'Not provided'
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
        }

        // Format email content
        const emailSubject = `New Distributor Application - ${sanitize(fullName)}`
        const emailBody = `
New Distributor Application Received

Personal Information:
- Full Name: ${sanitize(fullName)}
- Email: ${sanitize(email) || 'Not provided'}
- Phone: ${sanitize(phone) || 'Not provided'}
- Area: ${sanitize(area) || 'Not provided'}

Business Background:
${sanitize(businessBackground) || 'Not provided'}

CV: ${cv ? 'Attached' : 'Not provided'}
        `.trim()

        // Create HTML version of email
        const emailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #BF1D2E;">New Distributor Application Received</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Personal Information:</h3>
                    <p><strong>Full Name:</strong> ${sanitize(fullName)}</p>
                    <p><strong>Email:</strong> ${sanitize(email) || 'Not provided'}</p>
                    <p><strong>Phone:</strong> ${sanitize(phone) || 'Not provided'}</p>
                    <p><strong>Area:</strong> ${sanitize(area) || 'Not provided'}</p>
                </div>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Business Background:</h3>
                    <p style="white-space: pre-wrap;">${sanitize(businessBackground) || 'Not provided'}</p>
                </div>
                <p><strong>CV:</strong> ${cv ? 'Attached' : 'Not provided'}</p>
            </div>
        `

        // Log the submission (always log, even if email fails)
        console.log('='.repeat(60))
        console.log('NEW DISTRIBUTOR APPLICATION RECEIVED')
        console.log('='.repeat(60))
        console.log('Full Name:', fullName)
        console.log('Email:', email || 'Not provided')
        console.log('Phone:', phone || 'Not provided')
        console.log('Area:', area || 'Not provided')
        console.log('Business Background:', businessBackground || 'Not provided')
        console.log('CV:', cv ? 'Attached' : 'Not provided')
        console.log('='.repeat(60))

        // Get configuration from environment variables
        const emailUser = process.env.EMAIL_USER || 'kavindamanoharak@gmail.com'
        const emailPassword = process.env.EMAIL_PASSWORD || process.env.EMAIL_APP_PASSWORD
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'kavindamanoharak@gmail.com'

        // Create mailto link as fallback
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

        // Check if email is configured
        if (!emailPassword || emailPassword.trim() === '' || emailPassword === 'your-app-password-here') {
            console.warn('EMAIL_PASSWORD is not configured. Submission logged to console only.')
            console.warn('To enable email sending, create .env.local file with:')
            console.warn('   EMAIL_USER=kavindamanoharak@gmail.com')
            console.warn('   EMAIL_PASSWORD=your-16-character-app-password')
            console.warn('   RECIPIENT_EMAIL=kavindamanoharak@gmail.com')
            console.warn('   Then restart the server with: npm run dev')
            
            // Still return success, but with mailto fallback
            return NextResponse.json({ 
                success: true, 
                message: 'Application submitted successfully! We will contact you soon.',
                mailtoLink: mailtoLink,
                note: 'Email not configured - submission logged to console. Check terminal for details.'
            })
        }

        // Email is configured, try to send
        try {
            console.log('Email configuration found. Attempting to send email...')
            console.log('Creating email transporter with user:', emailUser)

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: emailUser,
                    pass: emailPassword,
                },
            })

            // Verify transporter configuration
            await transporter.verify()
            console.log('Email transporter verified successfully')

            // Prepare attachments if CV is provided
            const attachments = []
            if (cv) {
                // Check if cv is base64 encoded (common for file uploads)
                if (typeof cv === 'string') {
                    // Handle base64 string (e.g., "data:application/pdf;base64,JVBERi0x...")
                    const matches = cv.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
                    if (matches && matches.length === 3) {
                        const mimeType = matches[1]
                        const base64Data = matches[2]
                        const extension = mimeType.split('/')[1] || 'pdf'
                        
                        attachments.push({
                            filename: `cv_${fullName.replace(/\s+/g, '_')}.${extension}`,
                            content: base64Data,
                            encoding: 'base64',
                            contentType: mimeType
                        })
                    } else {
                        // If it's a regular base64 string without data URI
                        attachments.push({
                            filename: `cv_${fullName.replace(/\s+/g, '_')}.pdf`,
                            content: cv,
                            encoding: 'base64'
                        })
                    }
                }
            }

            // Send email with custom "From" name
            const mailOptions = {
                from: `"Mr Chilli Website" <${emailUser}>`, // Custom display name
                to: recipientEmail,
                subject: emailSubject,
                text: emailBody,
                html: emailHTML,
                attachments: attachments.length > 0 ? attachments : undefined
            }

            await transporter.sendMail(mailOptions)
            console.log(`Email sent successfully to ${recipientEmail}`)

            return NextResponse.json({ 
                success: true, 
                message: 'Application submitted successfully! We will contact you soon.'
            })
        } catch (emailError: any) {
            // Email sending failed, but submission is still logged
            console.error('Email sending failed:', emailError.message)
            console.error('However, the application has been logged above.')
            console.error('You can manually send email using the mailto link or check the console logs.')
            
            // Return success with mailto fallback
            return NextResponse.json({ 
                success: true, 
                message: 'Application submitted successfully! (Email sending failed, but submission is logged)',
                mailtoLink: mailtoLink,
                emailError: process.env.NODE_ENV === 'development' ? emailError.message : undefined
            })
        }
    } catch (error: any) {
        console.error('Error processing application:', error)
        console.error('Error details:', {
            message: error?.message,
            code: error?.code,
            stack: error?.stack
        })
        
        // Even on error, log what we have
        console.log('Partial application data was logged above')
        
        return NextResponse.json(
            { 
                success: false, 
                message: 'An error occurred while processing your application. Please try again or contact us directly.',
                error: process.env.NODE_ENV === 'development' ? error?.message : undefined
            },
            { status: 500 }
        )
    }
}