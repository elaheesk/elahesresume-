Personal CV Website
Description: This is a personal CV website built with React and deployed using Firebase Hosting. It showcases my skills, experience, projects, and contact information. Firestore is used as a backend database for storing dynamic content like projects and contact form submissions.

Features
About Me: A detailed introduction in Details page, including my qualities.
Projects: A dynamically loaded portfolio of projects using Firestore.
Contact Form: A form for visitors to send messages, with submissions saved in Firestore.
Responsive Design: Optimized for desktop, tablet, and mobile devices.

Firebase Integration:
Firestore: To store and retrieve project data and contact form submissions.
Firebase Hosting: For deploying the application.

Technologies Used
*Frontend: React
*Styling:Tailwind CSS
*Backend: Firebase Firestore
*Deployment: Firebase Hosting

View the Live Project
You can view the live version of the project without any setup:
Live URL:  https://elahes-resume-react.web.app/

Running the Project Locally
Getting Started
To run this project locally, ensure you have the following:
*Node.js
*npm or yarn
*A Firebase project set up in the Firebase Console.

Setup and Run Locally
1. Clone this repository: git clone https://github.com/elaheesk/elahesresume-.git
2. Navigate to the project folder: elahesresume-
3. Install dependencies: npm install

4.Set up Firebase:
If you want to use Firebase locally, create a Firebase project in the Firebase Console.
Create a .env file in the root of your project and add your Firebase configuration:
Replace your Firebase configuration in .env with your own

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

5. Start the development server: npm start
6. Open your browser at http://localhost:3000.

Deployment to Firebase Hosting
The application is deployed using Firebase Hosting. To deploy the project:
1. Install Firebase CLI: npm install -g firebase-tools
2. Login to Firebase:firebase login
3. Initialize Firebase in the project:firebase init and then select Hosting and configure the build folder (e.g., build).
4. Build the project: npm run build
5. Deploy to Firebase: firebase deploy
6. Your application will be available at the Firebase Hosting URL.








