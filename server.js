var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3306;

// Requiring our models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app

// if (process.env.NODE_ENV !== 'test') {
// 	db.sequelize.sync({
// 		force: true
// 	}).then(function () {
// 		app.listen(PORT, function () {
// 			console.log("App listening on PORT " + PORT);
// 		});
// 	});
// }

if (process.env.JAWSDB_URL) {
	app = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	app = mysql.createConnection({
		host: 'zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'f2cchicw9z1g1uru',
		password: 'hq72cyw7idh38i5a',
		database: 'es43okhstgyry1h9'
	});
};

module.exports = app;