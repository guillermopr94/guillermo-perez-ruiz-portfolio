# EmailJS Setup Guide

This document explains how to configure EmailJS for the contact form in your portfolio.

## Prerequisites

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## Step-by-Step Configuration

### 1. Create an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the OAuth flow to connect your email account
5. Copy the **Service ID** (e.g., `service_abc1234`)

### 2. Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. Configure these template parameters:
   - `from_name` - Sender's name
   - `reply_to` - Sender's email
   - `subject` - Message subject
   - `message` - Message body

5. Set the **To Email** field to your personal email (e.g., `guillermoperezruiz94@gmail.com`)
6. Copy the **Template ID** (e.g., `template_xyz5678`)

### 3. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)

### 4. Configure Environment Variables

Update your `.env.local` file with the values you copied:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### 5. Restart Development Server

```bash
npm run dev
```

## Testing

1. Navigate to the Contact section
2. Fill out the form with test data
3. Click "Send Message"
4. You should receive an email at your configured address

## Troubleshooting

### "EmailJS configuration is missing" Error

- Verify all three environment variables are set correctly
- Ensure variable names start with `VITE_` (required by Vite)
- Restart your dev server after adding variables

### Email Not Received

- Check your spam folder
- Verify the **To Email** in your template settings
- Check the EmailJS dashboard for delivery logs
- Ensure your email service is active (not paused)

### CORS Errors

- EmailJS handles CORS automatically for their CDN
- If using a custom domain, add it to EmailJS allowed origins

## Production Deployment

### Vercel

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add all three EmailJS variables
4. Redeploy your application

### Other Platforms

Add the environment variables through your platform's dashboard or CLI.

## Security Best Practices

✅ **Implemented:**

- Honeypot field to prevent spam bots
- Client-side validation
- Environment variables for sensitive data
- No backend exposure

🔒 **Recommendations:**

- Consider adding Google reCAPTCHA for additional security
- Monitor your EmailJS usage quota
- Set up email rate limiting in EmailJS dashboard

## Free Tier Limits

EmailJS free tier includes:

- 200 emails/month
- 2 email services
- Unlimited templates

For higher volume, upgrade to a paid plan.

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
