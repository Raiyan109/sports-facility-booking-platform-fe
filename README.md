



# Sports Facility Booking Platform
![Sports Facility Booking Platform Hero](/src/assets/sports%20facility.png "Sports Facility Booking Platform Hero")
![Sports Facility Booking Platform Plants](/src/assets/dashboard%20expand.png "Sports Facility Booking Platform Plants")
![Sports Facility Booking Platform Dashboard](/src/assets/dashboard%20not%20expanded.png "Sports Facility Booking Platform Dashboard")

## Introduction

Your Ultimate Solution for Sports Facility Management - Effortlessly Book, Manage, and Explore Sports Facilities

## Project Description

This project is a comprehensive sports facility booking platform designed for both users and administrators. The platform allows users to book sports facilities such as gyms, courts, and fields, while providing admins with the tools to manage these facilities, oversee bookings, and maintain user accounts.

### Purpose and Goals:

- **Purpose:** To provide a seamless, user-friendly platform for booking and managing sports facilities.
- **Goals:**
  - Facilitate easy searching and booking of sports facilities.
  - Provide a robust admin interface for managing facilities and bookings.
  - Ensure a smooth, efficient, and secure booking process.

## Features

### User Features:
- **Landing Page:**
  - Hero Section: Visually appealing introduction with a "Book Now" call-to-action.
  - Featured Facilities: Highlight popular sports facilities.
  - How It Works: Simple guide to the booking process.
  - Customer Testimonials: Feedback from satisfied users.
  - Pricing Section: Showcase a special pricing section.
  
- **Dashboard:**
  - Welcome Message: Personalized greeting based on user data.
  - My Bookings: List and manage user bookings with options to view details or cancel.

- **Facility Listing Page:**
  - Search & Filters: Search by facility name or location, filter by pricing.
  - Facility Cards: Detailed view with image, name, price per hour, and booking link.

- **Facility Details Page:**
  - Facility Overview: Comprehensive details including images, location, price, and description.
  - Booking Button: Direct navigation to booking interface.

- **Booking Page:**
  - Availability Checker: Interactive date picker and time slot availability.
  - Booking Form: Input for booking details including date, start time, and end time.
  - Payment Integration: Secure payment through AamarPay.
  - Confirmation: Display of booking summary upon successful booking.

- **About Us Page:**
  - Mission Statement: Platform's purpose and values.
  - Team Section: Bios and photos of key members.
  - History & Milestones: Narrative or timeline of achievements.
  - Contact Information: Office address, phone number, and email.

- **Contact Us Page:**
  - Contact Form: Easy-to-use form for feedback or inquiries.
  - Map Integration: Embedded google map for office location.
  - Contact Details: Comprehensive contact information.

### Admin Features:
- **Admin Dashboard:**
  - Welcome Message: Personalized admin greeting.
  - Facility Management: CRUD operations on sports facilities, including image management.
  - Booking Management: Overview and management of all bookings.
  - Add Admin: Create new admin accounts through a dedicated form.

### Additional Features:
- **Responsive Design:** Full compatibility across mobile, tablet, and desktop devices.
- **Pagination:** For improved navigation through facility listings.
- **Scroll to Top Button:** Enhance user experience with quick navigation.
- **Error Handling:** Consistent toast notifications for API errors, and validation errors displayed on form fields.

## Technology Stack

### Frontend:
- React
- Redux Toolkit
- RTK Query
- Tailwind CSS
- Shadcn
- Framer-motion
- React Router Dom
- AamarPay
- react-icons
- SweetAlert
- Moment.js

### Backend:
- TypeScript
- Node.js
- Express
- MongoDB
- Mongoose
- Zod
- bcrypt
- axios
- JWT token

### Tools:
- Postman (API Testing)
- Git (Version Control)

## Installation Guidelines

### Prerequisites
- Node.js
- npm or yarn
- MongoDB
- TypeScript
- Express.js

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Raiyan109/sports-facility-booking-platform.git
   cd sports-facility-booking-platform

2. **Install Dependencies:**
   ```bash
   npm install

3. **Run the Application:**
   ```bash
  ts-node-dev --respawn --transpile-only src/server.ts

### Configuration
1. Create a .env file in the root directory.
2. Add the necessary environment variables:

