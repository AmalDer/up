var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM group ORDER BY idgroup DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('group', {title:'Node.js MySQL CRUD Application', action:'listGroup', groupData:data});
		}

	});

});

// //to add the group created to the database
// router.get("/addGroup", function(request, response){


// 	// response.render("student", {title:'Insert Data into MySQL', action:'add'});

// });

module.exports = router;