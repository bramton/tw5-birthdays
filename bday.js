/*\
title: $:/plugins/bramton/tw5-birthdays/bday.js
type: application/javascript
module-type: filteroperator

Filter dates on month and day, upcoming dates first
\*/
(function(){

"use strict";

/*
Order a list
*/
exports.bday = function(source, operator, options) {
	var results = [];
	var dates = [];
	const today = new Date();

	source(function(tiddler, title) {
		// Date of Birth format: yyyy-mm-dd
		var dob = tiddler.getFieldString("dob");
		if (dob !== null && dob !== "") {
			dob = dob.split("-");
			if (dob.length === 3) {
				let m = parseInt(dob[1], 10) - 1; // Month, zero based
				const d = parseInt(dob[2]); // Day

				// Determine if date needs to be at end of queue
				if(
					m < today.getMonth() ||
					(m == today.getMonth() && d < today.getDate())
				) {
					m = m + 12;
				}
				dates.push([dates.length, m, d])

				// Sort on month, then by day
				dates.sort(function(a, b) {
					return a[1] - b[1] || a[2] - b[2];
				});
				
				results.push(title);
			}
		}
	});
	
	// Reorder the results based on the order of the dates
	return dates.map(function(date) {return results[date[0]]});
};

})();
