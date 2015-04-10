#!/usr/bin/env node
var argv = require('yargs').argv;

var settings = require('../settings.json');
var utils = require('../lib/utils');

utils.getWOD(function(name, definition){
  console.log(name);
  console.log(definition);
});
