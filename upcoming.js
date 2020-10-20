/*\
title: $:/plugins/bramton/tw5-birthdays/upcoming.js
type: application/javascript
module-type: filteroperator

Filter dates on month and day, upcoming dates first
\*/
(function(){


"use strict";

// TODO: specify date format in operand.

exports.upcoming = function(source, operator, options) {
	let results = [];
	let dates = [];
	const today = new Date();
	const field = operator.suffix;

	source(function(tiddler, title) {
		// Expected format: yyyy-mm-dd
		let date = tiddler.getFieldString(field);
		if (date !== null && date !== "") {
			date = date.split("-");
			if (date.length === 3) {
				let m = parseInt(date[1], 10) - 1; // Month, zero based
				const d = parseInt(date[2]); // Day

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
