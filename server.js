var http = require("http");
var url = require("url");
var fs = require("fs");
require("remedial");
var querystring = require("querystring"); 
var managePage = require("./js_server/managePage.js"); 

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
    if(managePage.url.pathname !== "/favicon.ico"){
        managePage.sendDataToUser(); 
    }  
}

// Create the server 
var server = http.createServer(manageServer); 
server.listen(8080); 