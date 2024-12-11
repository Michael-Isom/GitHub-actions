# GitHub-actions
This is a web-based coding quiz application built with React, TypeScript, and Vite for the client-side, and Node.js with Express for the server-side. The application allows users to take a quiz, see their score, and retry the quiz if desired.

Prerequisites

Before getting started, you need to have the following software installed on your system:
	1.	Node.js (v14 or higher)
You can download and install Node.js from here.
	2.	npm (Node Package Manager)
npm comes with Node.js, so it will be installed when you install Node.js.
	3.	TypeScript
TypeScript is required for the project. You can install it globally by running:
npm install -g typescript
	4.	Git (Optional, but recommended for version control)
Download and install Git from here.

Installation

Follow these steps to get the application up and running on your local machine.

1. Clone the repository
git clone https://github.com/your-username/github-actions.git
cd github-actions
2. Install dependencies

Navigate to the project directory (github-actions), and run the following command to install all the required dependencies:

npm install
This command installs the necessary libraries for both the frontend (React, Vite, etc.) and the backend (Node.js, Express, etc.).

3. Configure environment variables

Ensure that your application is set up to work on the correct ports, and if necessary, update the API URL in the frontend to point to the correct backend (this is usually handled by Vite’s proxy).

4. Run the application

There are two parts to the application: the client-side (React) and the server-side (Node.js/Express). You can run both parts simultaneously using concurrently.

Run the following command:
npm run develop

This command runs both the client and server in development mode:
	•	Frontend (client-side) will run on port 3000 by default.
	•	Backend (server-side) will run on port 3002 by default.

/github-actions
│
├── /client             # Frontend (React, Vite)
│   ├── /src            # React source code
│   ├── /public         # Public assets (HTML, images, etc.)
│   └── vite.config.ts  # Vite configuration
│
├── /server             # Backend (Node.js, Express)
│   ├── /src            # Backend source code
│   ├── /dist           # Compiled output
│   └── server.js       # Main server entry point
│
├── /cypress            # Cypress end-to-end tests
├── /node_modules       # Node.js dependencies
├── package.json        # Project metadata and scripts
└── tsconfig.json       # TypeScript configuration

Client-side

	•	React is used to create the UI.
	•	Vite is the build tool for fast development.

Server-side

	•	Node.js with Express is used for the backend API that serves the quiz questions.

Cypress

	•	Cypress is used for end-to-end testing of the application.

Scripts

Here are the common npm scripts you can use:
	•	npm run develop
Runs both the client and server in development mode using concurrently.
	•	npm run build
Builds the production version of both the client and server.
	•	npm run start
Starts the production server after building the project.
	•	npm run test
Runs unit tests for the project (if applicable).
	•	npm run test:e2e
Runs the Cypress end-to-end tests.

Configuration

You may want to configure your project settings, such as ports and API URLs. These are typically defined in:
	•	client/package.json: For frontend-related configurations like Vite settings.
	•	server/src/server.js: For backend-related configurations such as API routes.

Common Issues & Troubleshooting

1. Backend Not Found

If you get an error when fetching questions from the backend (e.g., ECONNREFUSED or 404):
	•	Make sure your backend server is running on the correct port (default is port 3002).
	•	Check that your frontend is correctly proxying requests to the backend via the vite.config.ts file.

2. Cypress Test Error

If Cypress tests are failing, try clearing the Cypress cache:
npm cypress cache clear

then run the tests again:
npm run test:e2e

3. Missing TypeScript Configuration

If you get TypeScript errors related to missing tsconfig.json files or invalid configurations, make sure your tsconfig.json file is correctly configured and includes all necessary files.

License

This project is licensed under the MIT License - see the LICENSE file for details.
