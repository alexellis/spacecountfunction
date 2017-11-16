"use strict"
const request = require('request');

module.exports = (context, callback) => {
    
    request.get({uri: "http://api.open-notify.org/astros.json", json: true}, (err, data, jsonBody)=> {
                callback(undefined, {jsonBody});
    });
}
