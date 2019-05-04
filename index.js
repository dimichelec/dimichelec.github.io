const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const yaml = require('js-yaml')
const fs = require('fs')

var settings = yaml.load(
	fs.readFileSync(
		path.join(__dirname, 'public', 'dk-rotator.yml'),
		'utf8'
	)
)

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {settings: settings}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
