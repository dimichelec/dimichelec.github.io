
const path     = require('path');
const yaml    = require('js-yaml');
const fs      = require('fs');
const crypto  = require('crypto');

const configFile = 'data/configuration.yml';

// calculate and return current hash of settings file
exports.getHash = function() {
	var hash = crypto
		.createHash('md5')
		.setEncoding('hex');
	hash.write(
		fs.readFileSync(
			path.join(__dirname, 'public', configFile),
			'utf8'
		)
	);
	hash.end();
	return hash.read();
}

// read and return current settings
exports.getSettings = function() {
	return yaml.load(
		fs.readFileSync(
			path.join(__dirname, 'public', configFile),
			'utf8'
		)
	);
}


