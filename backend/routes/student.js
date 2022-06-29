var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM student ORDER BY idstudent ASC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.send(data);
			 response.render('student', {title:'Node.js MySQL CRUD Application', action:'listStudent', studentData:data});
		}

	});

});

//to add the group created to the database
// router.post("/addStudent", function(request, response, next){

// 	const 
// 	const sqlInsert = "INSERT INTO group(idgroup, groupname) VALUES (?,?)"
// 	database.query(sqlInsert,[idgroup, groupname], (err,result) => {

// 	})
// 	// response.render("student", {title:'Insert Data into MySQL', action:'add'});

// });

module.exports = router;