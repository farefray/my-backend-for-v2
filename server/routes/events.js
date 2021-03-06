"use strict";

let config 			= require("../config");
let logger 			= require("../core/logger");
let response = require("../core/response");

let Event_Controller = require("../applogic/controllers/events_controller");
module.exports = function(app, db) {
	Event_Controller.init();
	app.get("/forceLoad", (req, res, next) => {
		Event_Controller.forceReload().then(result => {
			if(response.OK === result.response) {
				return response.json(res, result, response.OK);
			}

			return res.sendStatus(response.BAD_REQUEST.status);
		});
	});
};
