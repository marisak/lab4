/* introHCI/lab4/routes/project.js */

exports.viewProject = function(req, res) {
	var name = req.params.name;
	console.log("This project is called:" + name);
	res.render('project', {
		'projectName': name //do I need a semicolon there
	});
}