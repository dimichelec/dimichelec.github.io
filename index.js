
const express = require('express');
const path    = require('path');
const yaml    = require('js-yaml');
const fs      = require('fs');
const crypto  = require('crypto');
const PORT    = process.env.PORT || 5000;


// calculate and return current hash of settings file
function settingsHash() {
	var hash = crypto
		.createHash('md5')
		.setEncoding('hex');
	hash.write(
		fs.readFileSync(
			path.join(__dirname, 'public', 'dk-rotator.yml'),
			'utf8'
		)
	);
	hash.end();
	return hash.read();
}

// read and return current settings
function settings() {
	return yaml.load(
		fs.readFileSync(
			path.join(__dirname, 'public', 'dk-rotator.yml'),
			'utf8'
		)
	);
}


// Setup Server
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
  // root handler
  .get('/', (req, res) => res.render('pages/index', {hash: settingsHash(), settings: settings()}))
  
  // /getSettingsHas handler
  .get('/getSettingsHash', function(req, res) {	res.send({hash: settingsHash()}); })
  
  // /getSettings handler
  .get('/getSettings', (req, res) => res.send({hash:settingsHash(), settings: settings()}))
  
  // Start server
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

