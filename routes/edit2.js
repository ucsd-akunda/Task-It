exports.editTask2 = function(req, res) {
	var newTask = {

			"idx" : req.query.idx,

			"task": req.query.task,

			"subject": req.query.subject,

			"dueDate": req.query.dueDate,

			"description": req.query.description,
		};


if(req.query.task){
	var tasks = req.app.get('taskData').cogs;
	tasks.splice(req.query.idx, 1, newTask);
	req.app.get('taskData').cogs = tasks;
};


 	// res.render('tasks', data);
 res.redirect('/tasks2');
};