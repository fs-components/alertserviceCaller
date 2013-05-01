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
var ALERTSERVICE_URL = 'https://familysearch.org/alertservice/summary/';

module.exports = function alertserviceCaller(userId, authToken, callback){
  if(typeof authToken !== 'undefined'){
    if(notificationSummary !== null){callback(null,notificationSummary);}
    else {
      superagent
        .get(ALERTSERVICE_URL+userId)
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