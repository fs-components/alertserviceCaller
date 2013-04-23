/*
 * Module Description
 * Language Picker for FamilySearch.org. Like version in frontier, without jQuery deps.
 *
 *
 */ 

/**
 * Module Deps
 *
 */
var superagent = require("superagent"); 
var notificationSummary = null;

module.exports = function notificationCall(userId, authToken){
  if(typeof authToken !== 'undefined'){
    if(notificationSummary !== null){return notificationSummary;}
    else {
      superagent
        .get('http://localhost:5000/alertservice/summary/'+userId)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer '+authToken)
        .end(function(res){
         if (res.ok) {
          try {
            notificationSummary = JSON.stringify(res.body);
            console.log(JSON.stringify(res.body));
          } catch(e){}
          
          return notificationSummary
         } else {
          console.log(res.text);
         }
       });
    }
  }
};