
const path     = require('path');
const yaml    = require('js-yaml');
const fs      = require('fs');
const crypto  = require('crypto');


// calculate and return current hash of settings file
exports.getHash = function() {
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
exports.getSettings = function() {
	return yaml.load(
		fs.readFileSync(
			path.join(__dirname, 'public', 'dk-rotator.yml'),
			'utf8'
		)
	);
}


