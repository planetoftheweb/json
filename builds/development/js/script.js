(function () {

"use strict";

var output = [], update, info;
var request;

request = new XMLHttpRequest();

request.open('GET', 'js/data.json');
request.onreadystatechange = function() {

if ((request.status === 200) &&
	(request.readyState === 4)) {

			info = JSON.parse(request.responseText);

			for (var i = 0; i <= info.links.length-1; i++) {
				for (var key in info.links[i]) {
					if (info.links[i].hasOwnProperty(key)) {
						output.push('<li id="' + key + '">'); 
						output.push('<a href="' + info.links[i][key]); 
						output.push('">' + key + '</a>');
						output.push('</li>');
			    } // make sure property exists
				} // go through each object
			} // go through each array element


		update = document.querySelector('.links ul');
		update.innerHTML = output.join('');

	} //ready
}; //event
request.send();

}()); //self executing function call