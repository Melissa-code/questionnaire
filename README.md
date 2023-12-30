# Questionnaire 

This is a web application to learn Node.js. 


## Project steps

1- Create the server Node.js
2- Create the database with MySQL Workbench
3- Use JavaScript & MySQL to link the server to the DB
4- Bootstrap and the style 
5- Manage the website 
6- Make the game 


## Installations

- Browser: Google Chrome `https://www.google.com/intl/fr/chrome/gsem/download/?brand=ORZA&ds_kid=43700075934932895&gclid=Cj0KCQiAkKqsBhC3ARIsAEEjuJgvA627mYtDSDWpF5kJbRGhHfV9Rh6AXnjCxr6_bsHhzm7hvK7f5V0aAmLnEALw_wcB&gclsrc=aw.ds`  

- IDE: Visual Studio Code `https://code.visualstudio.com/`

- Execution environment: Node.js `https://nodejs.org/en/download`
- Get the version: `$ node -v` (version v18.18.0)

## Run 

- Initialize the server: `npm init -y` (package.json)
- Module Nodemon to restart the server: `npm install nodemon` 
- in the package.json, "in scripts: {}", add `"start": "node server.js"` or `"start": "nodemon server.js"` 
- Run: `npm start`

## Create a server without framework 

In the server.js file, add the modules : 

`var http = require("http");`
`var url = require("url");`
`var fs = require("fs");`
`require("remedial");`
`var querystring = require("querystring");`

Run : `npm install remedial` then `npm install querystring`

Manage the server: 

var manageServer = function(request, response) {
    var myUrl = url.parse(request.url); 
    console.log(myUrl); 
}

Create the server: 

`var server = http.createServer(manageServer);`
`server.listen(8080);` (localhost 8080)

Test the server: 

Run: `npm start`
You have in the terminal 
Url {
  ...
  pathname: '/',
  path: '/',
  href: '/'
}

## Manage the HTML pages in the js_server folder 

- Add the file managePage.js & create the variable managePage 
- Then export the variable managePage

- In the server.js, get the managePage variable `var managePage = require("./js_server/managePage.js"); `
- Define the manageServer with myUrl, queryString etc... 

- Display the information in the HTML page with the function sendDataToUser() in the managePage file 


## Create the database

