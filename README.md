# React Native Track App

Signup/login to create records of your tracks. 


## Getting Started

### Installing

* You will need to have expo and ngrok installed
* you will need to have a free ngrok account
* Clone the app
* cd into root folder, run npm install 
* cd into track-server folder, run npm install
* create a url.ts file in the root directory with 
```
const mongoUri = 'mongodb+srv://avalie:<password>@cluster0.l74pooh.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
  mongoUri: mongoUri
};
```
* start your ngrok in the command line, add the auth token then run the command to listen to localhost:3000
* in the src/tracker.tsx file, replace the baseUrl with ngork's url
* while ngrok is running, open another instance of the command line, cd into track-server and run 
```
 npm run dev
```
* another instance, in the root directory, run 
```
expo start --tunnel
```
* scan the QR code to run the app on your physical device. You will need to have expo installed.