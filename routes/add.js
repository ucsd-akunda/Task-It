exports.addTask = function(req, res) {
	var newTask = {

			"task": req.query.task,

			"subject": req.query.subject,

			"dueDate": req.query.dueDate,
		};

	// Your code goes here
 	if(req.query.task)
 		req.app.get('taskData').cogs.push(newTask);

 	// res.render('tasks', data);
 	res.redirect('/tasks');
	
 
	console.log("yay, addTask just ran!");

	// console.log(req);

};