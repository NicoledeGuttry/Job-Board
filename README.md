# Job Board

A full-stack job board application focused on tech opportunities.

The project is being developed incrementally to simulate the workflow of a real-world web application. It started as a React frontend using static data and is progressively evolving into a full-stack platform powered by a REST API, Laravel and MySQL.

The goal is to build a clean, scalable and maintainable application while exploring frontend architecture, backend development, database design and API integration.

### Getting Started
## Clone the repository

git clone <repository-url>
cd job-board

## Install dependencies

npm install

## Start the development server

npm run dev


# The application will then be available through the local Vite development server.

## Current Status

The frontend desktop experience is currently complete from a structural and visual perspective.
The next development phase will focus on building the backend and replacing the current static data with a real API and database.
Responsive optimization will be addressed in a dedicated frontend phase after the current desktop design has been finalized.


### Job Discovery

- Browse available tech job opportunities
- Search jobs by:
  - Job title
  - Company name
  - Technologies
- Filter jobs by technology
- Display the number of matching job offers
- Handle empty search results

### Job Details

- Dedicated job details page
- Dynamic routing with React Router
- Structured job information
- Company information
- Contract details
- Work mode
- Experience level
- Salary range
- Technology stack
- Benefits
- Job description
- Responsibilities
- Technical requirements
- Soft skills

### UI & UX

- Reusable React components
- Structured two-column job details layout
- Dedicated job hero section
- Navigation bar
- Footer
- Consistent design system using CSS variables
- Lucide icons
- Clear visual hierarchy
- Desktop-focused layout

## Tech Stack

### Frontend

- React
- React Router
- JavaScript
- Vite
- HTML5
- CSS3
- Lucide React

### Backend

Planned:

- Laravel
- PHP
- REST API

### Database

Planned:

- MySQL

### Tools

- Git
- GitHub
- npm


## Project Structure

The project currently follows a frontend-oriented React structure:

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── InfoCard.jsx
│   ├── JobCard.jsx
│   ├── JobContent.jsx
│   ├── JobHeader.jsx
│   ├── JobInfo.jsx
│   ├── JobSummary.jsx
│   └── Navbar.jsx
│
├── data/
│   └── jobs.js
│
├── pages/
│   ├── Home.jsx
│   └── JobDetails.jsx
│
├── App.jsx
└── main.jsx







