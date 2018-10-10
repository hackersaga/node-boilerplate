'use strict';

const fs = require('fs');
const http = require('http');
const url = require('url');
let Promise   = require('bluebird');
const request = require('request');
const unirest = require('unirest');

let FileUtils = {

	getFileFromUrl: function(fileUrl){
		return new Promise(function(resolve, reject){
			let options = {
				"url": decodeURI(fileUrl),
				"encoding": null,
				"followRedirect": true
			};
			request(options, function(error, response, body){
		      if (error) {
		      	return reject(error);	
		      }
		      var imageType   = response.headers['content-type'];
		      var base64      = Buffer.from(body).toString('base64');
		      
		      // console.log(base64);
		      return resolve(base64);
		    });
		});
	},

	downloadFile: async function(uri, destinationFilePath, headers){
		return new Promise(function(resolve, reject){
			let options = {
				"url": decodeURI(uri),
				"method": 'GET'
			};
			if(headers){
				options["headers"] = headers;
			}
			request(options)
			.pipe(fs.createWriteStream(destinationFilePath))
			.on('error', function(err) { 
				console.log('Error occured while downloading file', err);
			 }) 
			.on('close', function(){
				resolve();
			})
		});
	},

}

module.exports = FileUtils;