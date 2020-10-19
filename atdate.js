/*\
title: $:/plugins/bramton/tw5-birthdays/atdate.js
type: application/javascript
module-type: filteroperator

Filter dates on the specified date
\*/
(function(){


"use strict";

// TODO: specify date format in operand.

exports.atdate = function(source, operator, options) {
	var results = [];
	const today = new Date();
	const field = operator.suffix;

	source(function(tiddler, title) {
		// Expected format: yyyy-mm-dd
		var date = tiddler.getFieldString(field);
		if (date !== null && date !== "") {
			date = date.split("-");
			if (date.length === 3) {
				const m = parseInt(date[1], 10) - 1; // Month, zero based
				const d = parseInt(date[2]); // Day

				if (m == today.getMonth() && d == today.getDate()) {
					results.push(title);
				}
			}
		}
	});
	
	return results;
};

})();
