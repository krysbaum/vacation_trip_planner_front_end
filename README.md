# SQRL - Trip Planner

## Overview

This React application serves as the frontend for the Trips API, enabling users to manage and plan their trips using a clean and interactive interface. It integrates with the Rails backend to create, edit, and delete trips and manage places within those trips. Additionally, the app leverages Google's Gemini AI to provide suggestions for planning trips.

## Features

- **Interactive Trip Management**: Users can create, update, and delete trips through a user-friendly interface.
- **Place Management within Trips**: Add, edit, and delete places to visit within each trip.
- **AI-Powered Planning**: Integration with Gemini AI for smart travel suggestions.
- **Responsive Design**: Built with Bootstrap for a responsive layout that adapts to various devices.

## Technology Stack

- **React**: Frontend library for building the user interface.
- **Vite**: Next generation frontend tooling.
- **JavaScript**: Programming language for implementing the application logic.
- **Bootstrap**: Framework for developing responsive and mobile-first websites.

## Installation

To set up the frontend locally, follow these steps:

1. **Clone the Repository**
```
git clone https://github.com/yourusername/trips-planner-frontend.git
cd trips-planner-frontend
```
2. **Install Dependencies**
```
npm install
```
3. **Environment Setup**
Create a `.env` file at the root of the project and add necessary environment variables:
```
VITE_API_URL=http://localhost:3000
```
4. **Run the Server**
```
npm run dev
```

## Usage

Once the application is running, you can use the web interface to manage trips and places. The interface provides forms for adding new trips, updating existing ones, and deleting them. Similarly, you can manage the places for each trip with options to add new places, update existing ones, and remove them.

You'll need to have the backend code ([Trip Planner API](https://github.com/krysbaum/vacation_trip_planner_api/tree/main)) running on http://localhost:3000.
You can view the app on http://localhost:5173.
