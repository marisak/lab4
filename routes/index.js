
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects': [
  		{
	  		'name': 'The Freshman Experience',
	  		'image': 'comingsoon.jpg',
	  		'id': 'project1'
  		},
  		{
  			'name': 'Needfinding',
  			'image': 'comingsoon.jpg',
  			'id': 'project2'
  		},
  		{
  			'name': 'Prototyping',
  			'image': 'comingsoon.jpg',
  			'id': 'project3'
  		},
  		{ 
  			'name': 'Heuristic Evaluation',
        	'image': 'comingsoon.jpg',
       		'id': 'project4'
		},
		{ 
			'name': 'Visualization',
			'image': 'comingsoon.jpg',
			'id': 'project5'
		},
		{
			'name': 'Social Design',
			'image': 'comingsoon.jpg',
			'id': 'project6'
		},
		{
			'name': 'Gestural Interaction',
			'image': 'comingsoon.jpg',
			'id': 'project7'
		},
		{
			'name': 'Design Tools',
			'image': 'comingsoon.jpg',
			'id': 'project8'
		}
  	]
  });
};