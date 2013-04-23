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

module.exports = function notificationCall(userId, authToken, callback){
  if(typeof authToken !== 'undefined'){
    if(notificationSummary !== null){callback(null,notificationSummary);}
    else {
      superagent
        .get('http://localhost:5000/alertservice/summary/'+userId)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer '+authToken)
        .end(function(res){
         if (res.ok) {
          notificationSummary = res.body;
          callback(null,notificationSummary)
         } else {
          callback(res.text)
         }
       });
    }
  }
};