var mysql = require("mysql");
var db = require("./db.js");
var managePage = require("./managePage.js"); 

var manageQuestionnaire = {
  
    afficherQuestions: function() {
        // Connection to the database
        db.connection(); 
        db.instance.query('SELECT * from questions', function (error, results, fields) {
            if (error) throw error;
                console.log('Les questions sont: ', results);
                var txt = ""; 
                for (var question of results) {
                    txt += question['idQuestions'] + " : " + question['descriptionQuestion'] + "<br/>"; 
                }
                
                managePage.objectToSupplant.Questions = txt;
                managePage.sendDataToUser(); 
                return txt; 
        });
        db.deconnection();    
    }
}

module.exports = manageQuestionnaire; 