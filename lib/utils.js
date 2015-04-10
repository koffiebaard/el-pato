var http = require('http');
var https = require('https');
var fs = require('fs');
var jsdom = require("jsdom");
var settings = require('../settings.json');

module.exports.getFilenameFromURL = function(url) {
	var matches = url.match(/\/([a-zA-Z0-9\-_ \%\+]+\.[a-zA-Z]{3,4})[a-zA-Z0-9\-_ \%\+\?=]*$/i);
	if (matches.length > 1) {
		return matches[2];
	}

	return url;
}

module.exports.getWOD = function(callback) {
	url = 'http://www.merriam-webster.com/word-of-the-day/'
	jsdom.env(
		url,
		["//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"],
		function (errors, window) {
			$ = window.$;
			var word = $('.wod_container .wod_headword h1').text();
			var definition = $('.wod_container .d').html()
			callback(word, definition);
		}
	);
}

