var data = require("../taskdata.json");





exports.addTask = function(req, res) {
	var newTask = {

			"task": req.query.task,

			"dueDate": req.query.dueDate,

			"email": req.query.email,

			"priority": req.query.priority
		};

	// Your code goes here
 	if(req.query.task)
 		data.cogs.push(newTask);

 	res.render('tasks', data);
	
 
  console.log("yay, addTask just ran!");

  console.log(newTask);

};