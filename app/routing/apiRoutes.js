var friends = require('../data/friends');

module.exports = function(app) {
	//GET route for /api/friends -- display JSON of all friends	
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});


	//POST route for /api/friends -- handle incoming survey results
	app.post('/api/friends', function(req, res) {
		//user results in array

	    var match = {
	      name: "",
	      photo: "",
	      difference: Infinity
	    };

		var friendSurvey = req.body;
    	var friendSurveyScores = req.body.scores;		
    	var scoreDifference;

    	//loop over all friends
    	friends.forEach(function(friend) {
    		var friend = friends;
    		scoreDifference = 0;

    		//loop over scores for all friends
			for (var i = 0; i < friend.scores.length; i++) {
			var friendScore = friend.scores[i];
			var userScore = friendSurveyScores[i];

			//add differences to calculate total difference (abs value)
			scoreDifference += Math.abs(parseInt(userScore) - parseInt(friendScore));
			}

			if (scoreDifference <= match.difference) {
				match.name = friend.name;
				match.photo = friend.photo;
				match.difference = scoreDifference;
			};
			
			friendsArray.push(friendSurvey);
			res.json(friendSurvey);			
    	});
	});
};