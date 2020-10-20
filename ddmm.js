/*\
title: $:/plugins/bramton/tw5-birthdays/ddmm.js
type: application/javascript
module-type: macro

Macro to convert a date to dd-mm format
\*/
(function(){

"use strict";

exports.name = "ddmm";

exports.params = [
	{name: "date"}
];

/*
Run the macro
*/
exports.run = function(date) {
	// Expected format: yyyy-mm-dd
	let parts = date.split("-");
	return parts[2]+"-"+parts[1];
};

})();
