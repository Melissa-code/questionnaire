var mysql = require("mysql");
var db = require("../config/config.js")

// Create an objet to export it 
var db = {
    instance: null,

    connection: function() {
        this.instance = mysql.createConnection({
            host     : config.DBHOST, 
            user     : config.DBUSER,
            password : config.PASSWORD,
            database : config.DATABASE
        });
        
        this.instance.connect(function(err){
            if (err) {
                console.error('Erreur de connexion : ' + err.stack);
                return;   
            }
            console.log('Connexion à la base de données réussie !')
        });
    },

    deconnection: function() {
        this.instance.end(); 
    }
}

module.exports = db; 

 
