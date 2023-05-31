# Quiz App Frontend (React)

This is the frontend application for the Quiz App built using React. It allows users to take quizzes on various technologies and submit their answers.

## Features

- Select a technology and quiz from the available options.
- Answer multiple-choice questions for the selected quiz.
- Submit the quiz and view the results.

## Installation

1. Clone the repository
2. Navigate to the frontend directory: `cd quiz-app-frontend`
3. Install the dependencies: `npm install`

## Backend Code:

https://github.com/bhanujoshi24/teluskoContest

## Youtube Video:

Watch [here]()

## Medium Blog :

Read [here]

## Usage

1. Start the React development server: `npm start`
2. Open your browser and visit `http://localhost:3000` to access the Quiz App frontend.

## Configuration

The Quiz App frontend requires the backend API to be running. By default, it expects the backend to be running at `http://localhost:8080`. If your backend is running at a different address, you can update the API endpoint in the `src/api/apiConfig.js` file.

```javascript
// src/api/apiConfig.js

const BASE_URL = "http://localhost:8080/api"; // Update this URL if needed

export default BASE_URL;
```
