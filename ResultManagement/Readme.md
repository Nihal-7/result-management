# Project Name
RESULT MANAGEMENT SYSTEM

## Description
This web application is designed for efficient student results management, where teachers can carry out essential tasks such as adding,
 deleting, updating, and viewing all student results. Additionally, students can easily access their results by logging in with their 
roll number and date of birth. Various validations have been applied using json web token for functions done by teachers for enhanced security.

##To set up the system on your machine, follow these steps:
Install the required node modules in both the frontend as well as backend using the following command:
npm install


## Getting Started
1. Run the server: `npm run dev`
2. Login as a teacher:
- enter "/register" in the url for the registration page, no button is created for registration for security
 (validateToken is used in the backend for security and can be used by introducing validateToken before every function of controller in route file.)
3. Add student data using the "Add Student" button.
4. Remember the student's roll number and date of birth for student login.
5. Logout from the teacher account.
6. Log in as a student with the remembered roll number and date of birth to view results.

## Note
please ensure you have mongodb installed in your system
