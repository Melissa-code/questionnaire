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
                    txt += '<div class="feature col border border-rounded p-2 gx-1">';
                    txt += '<h3 class="">' + question['idQuestions'] + " : " + question['descriptionQuestion'] + '</h3>'
                    txt += '<ul class="list-unstyled">'
                    txt += '<li>Réponse 1 : ' + question['reponseA'] + '</li>'
                    txt += '<li>Réponse 2 : ' + question['reponseB'] + '</li>'
                    txt += '<li>Réponse 3 : ' + question['reponseC'] + '</li>'
                    txt += '<li>Réponse 4 : ' + question['reponseD'] + '</li>'
                    txt += '</ul>'
                    txt += '</div>'
                }
                
                managePage.objectToSupplant.Questions = txt;
                managePage.sendDataToUser(); 
                return txt; 
        });
        db.deconnection();    
    }
}

module.exports = manageQuestionnaire; 