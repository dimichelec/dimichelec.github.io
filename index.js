
const express  = require('express');
const path     = require('path');
const PORT     = process.env.PORT || 5000;
const settings = require('./settings.js');


// Setup Server
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
  // root handler
  .get('/', (req, res) => res.render('pages/index', {
	hash: settings.getHash(),
	settings: settings.getSettings()
  }))
  
  // /getSettingsHas handler
  .get('/getSettingsHash', (req, res) => res.send({
	hash: settings.getHash()
  }))
  
  // /getSettings handler
  .get('/getSettings', (req, res) => res.send({
	hash: settings.getHash(),
	settings: settings.getSettings()
  }))
  
  // Start server
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


