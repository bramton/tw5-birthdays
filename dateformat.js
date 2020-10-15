/*\
title: $:/plugins/bramton/tw5-birthdays/dateformat.js
type: application/javascript
module-type: macro

Macro to convert a date to dd-mm format
\*/
(function(){

"use strict";

/*
Information about this macro
*/

exports.name = "ddmm";

exports.params = [
	{name: "date"}
];

/*
Run the macro
*/
exports.run = function(date) {
	// Date of Birth format: yyyy-mm-dd
	console.log("date:"+date);
	var dob = date.split("-");
	return dob[2]+"-"+dob[1];
};

})();
