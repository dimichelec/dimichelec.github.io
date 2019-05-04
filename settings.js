
const yaml = require('js-yaml')
const fs = require('fs')

var settings = function() {
	return yaml.load(
		fs.readFileSync(
			path.join(__dirname, 'public', 'dk-rotator.yml'),
			'utf8'
		)
	);
}
