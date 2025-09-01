# API Contracts - Global Lanka Trading Website

## Overview
This document outlines the API contracts for integrating the frontend with backend services, particularly for contact form submission and email functionality.

## Frontend Mock Data (Currently Using)
- **File**: `/frontend/src/mock.js`
- **Mock Function**: `submitContactForm()` - simulates form submission with 1-second delay
- **Form Data**: Name, Email, Company, Phone, Country, Message
- **Response**: Success message displayed to user

## Backend Implementation Required

### 1. Contact Form API Endpoint
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "company": "string (optional)",
  "phone": "string (optional)",
  "country": "string (optional)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We will get back to you soon."
}
```

### 2. Email Service Integration
- **Purpose**: Send contact form submissions to company email
- **Recipient**: globallankatrading2.0@gmail.com
- **Email Template**: Professional format with all form fields
- **Subject**: "New Inquiry from Global Lanka Trading Website"

### 3. Database Storage (Optional but Recommended)
- **Collection**: `contact_inquiries`
- **Fields**: All form fields + timestamp + unique ID
- **Purpose**: Track and manage customer inquiries

## Frontend Integration Changes Required
1. Replace `submitContactForm` import from `mock.js` with actual API call
2. Update Contact component to use `REACT_APP_BACKEND_URL + '/api/contact'`
3. Add proper error handling for API failures
4. Keep existing loading states and success messaging

## Error Handling
- Email sending failures should still store inquiry in database
- Return appropriate error messages to frontend
- Log all errors for debugging

## Security Considerations
- Input validation on all form fields
- Rate limiting for contact form submissions
- Email validation before sending
- Sanitize inputs to prevent injection attacks

## Testing Requirements
- Test successful form submission and email sending
- Test form validation with invalid inputs
- Test email service failures
- Verify database storage of inquiries