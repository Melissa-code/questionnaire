var fs = require("fs");

// Initialize an object 
var managePage = {
    url: null, 
    extension: null,
    request: null,
    response: null,
    queryString: null, 
    objectToSupplant: null,

    /**
     *  Initialize a page 
     * @param {*} url 
     * @param {*} extension 
     * @param {*} request 
     * @param {*} response 
     * @param {*} queryString 
     */
    initialization: function(url, extension, request, response, queryString) {
        this.url = url;
        this.extension = extension;
        this.request = request;
        this.response = response;
        this.queryString = queryString;
        this.objectToSupplant = {}; 
    }, 

    /**
     * Send the response (data to send)
     */
    sendDataToUser: function() {
        var data = this.generateDataToSend(); 
        this.response.writeHead(200, {'Content-Type' : data.contentType});
        this.response.write(data.content); 
        this.response.end(); 
    },

    /**
     * Generate the data (content & contentType)
     * @returns data object
     */
    generateDataToSend: function() {
        var data = {}; 
        var folder = ""; 

        if (this.extension === ".html" || this.url.pathname === "/") {
            if (this.url.pathname === "/") {
                this.url.pathname = "/index.html";
            }
            folder = "html"; 
            data.contentType = "text/html"; 
            data.content = this.generatePageHtml(folder); 
        } else if (this.extension === ".css") {
            folder = "css"; 
            data.contentType = "text/css"; 
            data.content = fs.readFileSync(folder+this.url.pathname);
        } else if (this.extension === ".js") {
            folder = "js_client"; 
            data.contentType = "application/javascript";
            data.content = fs.readFileSync(folder+this.url.pathname);
        } else if (this.extension === ".png" ) {
            folder = "ressources/images";
            data.contentType = "image/png"; 
            data.content = fs.readFileSync(folder+this.url.pathname);
        } else if (this.extension === ".jpg" ) {
            folder = "ressources/images";
            data.contentType = "image/jpeg"; 
            data.content = fs.readFileSync(folder+this.url.pathname);
        } 

        return data; 
    },

    /**
     * Generate a HTML page with the header & the footer 
     * @param {*} folder 
     * @returns string pageHtml
     */
    generatePageHtml: function(folder) {
        let pageHtml = ""; 
        let headerHtml = fs.readFileSync(folder + "/common/header.html", "UTF-8"); // read the file & return the content asynchrone
        let footerHtml = fs.readFileSync(folder + "/common/footer.html", "UTF-8"); 
        let page = fs.readFileSync(folder + "/" + this.url.pathname, "UTF-8")
        pageHtml = headerHtml + page + footerHtml; 

        try {
            pageHtml = pageHtml.supplant(this.objetToSupplant);
        } catch(e){
            //console.log(`Error has occurred!`); 
        }

        return pageHtml; 
    }
}

module.exports = managePage; 