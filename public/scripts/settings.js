
// ------------------------------------------------------------------
// Settings Functions

// check for a settings update, if there is one, get new settings
function checkSettings() {
	$.get('/getSettingsHash', function(res) {
		if(res['hash'] != hash) getSettings();
	});
	setTimeout(checkSettings, settings.settings_check_time*1000);
}

// get new settings from server
function getSettings() {
	$.get('/getSettings', function(res) {
		hash = res['hash'];
		settings = res['settings'];
	});
}
