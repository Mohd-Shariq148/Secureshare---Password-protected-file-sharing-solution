# Secureshare---Password-protected-file-sharing-solution
This application is built using ejs, nodejs, expressjs, mongoose, multer, ejs, bcrypt, dotenve

SecureShare - Password-Protected File Sharing Solution
SecureShare is a web application that provides a secure and convenient way to share files with others. It allows users to upload files, optionally protect them with passwords, and share download links with authorized recipients.

Features
File Upload: Users can easily upload files through the web interface.
Password Protection: Files can be protected with passwords to restrict access to authorized users only.
Download Link Generation: After uploading a file, a unique download link is generated for sharing.
Download Count Tracking: The application tracks the number of times each file is downloaded.
Responsive Design: The user interface is designed to be responsive and accessible across different devices and screen sizes.
Technologies Used
SecureShare is built using the following technologies:

Node.js: A runtime environment for running JavaScript on the server side.
Express.js: A web application framework for Node.js, used for building the server-side logic and routing.
MongoDB: A NoSQL database used for storing file metadata and download statistics.
Mongoose: An object data modeling (ODM) library for MongoDB and Node.js, used for interacting with the MongoDB database.
bcrypt: A library for hashing passwords securely.
multer: A middleware for handling multipart/form-data, used for file uploads.
dotenv: A zero-dependency module for loading environment variables from a .env file into process.env.
Installation
To run SecureShare locally, follow these steps:

Clone the repository: git clone https://github.com/yourusername/secureshare.git
Navigate to the project directory: cd secureshare
Install dependencies: npm install
Set up environment variables by creating a .env file in the root directory and adding the following:
makefile
Copy code
DATABASE_URL=mongodb://127.0.0.1/filesharing
PORT=3000
Replace DATABASE_URL with your MongoDB connection string and PORT with the desired port number.
Start the server: npm start
Usage
Access the application in your web browser by navigating to http://localhost:3000.
Upload a file using the provided form.
Optionally, enter a password to protect the file.
Share the generated download link with authorized recipients.
Recipients can access the download link and enter the password (if required) to download the file.
The download count for the file will be incremented each time it is downloaded.
Contributing
Contributions to SecureShare are welcome! If you'd like to contribute, please follow these steps:

Fork the repository on GitHub.
Create a new branch for your feature or bug fix: git checkout -b feature-name
Make changes and commit them: git commit -m 'Add new feature'
Push to the branch: git push origin feature-name
Submit a pull request describing your changes.
License
SecureShare is licensed under the ISC License. See the LICENSE file for details.

Author
SecureShare is created and maintained by Mohd Shariq.

