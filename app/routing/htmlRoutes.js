var path = require('path');

//Display pages
module.exports = function(app) {
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})
};
