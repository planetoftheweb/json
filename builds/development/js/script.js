(function () {

"use strict";

var output = [], update;
var	info = {
	"full_name" : "Ray Villalobos",
	"title" : "Staff Author",
	"links" : [
			{ "blog"     : "http://iviewsource.com" },
			{ "facebook" : "http://facebook.com/iviewsource" },
			{ "podcast"  : "http://feeds.feedburner.com/authoredcontent" },
			{ "twitter"  : "http://twitter.com/planetoftheweb" },
			{ "youtube"  : "http://www.youtube.com/planetoftheweb" }
		]
};

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

}()); //self executing function call