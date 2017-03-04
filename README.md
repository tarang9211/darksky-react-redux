# DarkSky App using React

[![Build Status](https://travis-ci.org/tarang9211/darksky-react-redux.svg?branch=master)](https://travis-ci.org/tarang9211/darksky-react-redux)

<br />
#### Introduction

darksky-react-redux is a simple app that implements the [Dark Sky API](https://darksky.net/dev/). You can view the app on [heroku](https://dark-sky.herokuapp.com/) or follow the build instructions for local use.

This app has been developed using a test-driven approach with the help of Mocha, Chai-jQuery frameworks to set up the test environment and make assertions. dark-sky-react-redux also implemented **Continuous Integration** and **Continuous Deployment** using Travis CI and Heroku.

The app also uses a simplistic express server to bypass the **Cross Origin Resource Sharing (CORS)** issue.
The express server exposes API endpoints that allows the react app to communicate with the help of action-creators and reducers.

**PS** - Please ensure you allow access to your location for this app.



<br />
#### Build Instructions

You can also clone this repository to your computer by pasting 
`git clone https://github.com/tarang9211/darksky-react-redux.git` in a terminal window

. Once that is done, please follow these steps:
- `npm install --save` (this will install the dependencies)
- `npm test` (to ensure the app is successfully passing tests and linting)
- `npm start` (this serves the app on localhost:8080)
