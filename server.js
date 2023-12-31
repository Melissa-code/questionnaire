var http = require("http");
var url = require("url");
var fs = require("fs");
require('remedial');
var querystring = require("querystring"); 
var managePage = require("./js_server/managePage.js"); 
var manageQuestionnaire = require("./js_server/manageQuestionnaire.js"); 



/**
 * Manage the server 
 * @param {*} request 
 * @param {*} response 
 */
var manageServer = function(request, response) {
    let myUrl = url.parse(request.url); // analyse 
    let urlQueryString = querystring.parse(myUrl.query); 
    let extension = myUrl.pathname.substring(myUrl.pathname.indexOf('.'), myUrl.pathname.length); 
    managePage.initialization(myUrl, extension, request, response, urlQueryString); 
    
    // Debug in the console 
    if (managePage.url.pathname !== "/favicon.ico"){
        manageFiles();
    }  
}

function manageFiles() {
    if (managePage.url.pathname === "/" || managePage.extension === ".html") {
        if (managePage.url.pathname === "/afficherQuestions.html") {
            manageQuestionnaire.afficherQuestions();
        } else {
            managePage.sendDataToUser(); 
        }
    } else {
        managePage.sendDataToUser(); 
    }
}

// Create the server 
var server = http.createServer(manageServer); 
server.listen(8081); 