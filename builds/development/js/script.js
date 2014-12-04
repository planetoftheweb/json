(function() {

  "use strict";

  var output = [],
    update;
  var info = {
    "full_name": "Ray Villalobos",
    "title": "Staff Author",
    "links": {
      "blog": "http://iviewsource.com",
      "facebook": "http://facebook.com/iviewsource",
      "youtube": "http://www.youtube.com/planetoftheweb",
      "podcast": "http://feeds.feedburner.com/authoredcontent",
      "twitter": "http://twitter.com/planetoftheweb"
    }
  };

  for (var key in info.links) {
    if (info.links.hasOwnProperty(key)) {
      output.push('<li id="' + key + '">');
      output.push('<a href="' + info.links[key]);
      output.push('">' + key + '</a>');
      output.push('</li>');
    } // make sure property exists
  } // go through each object

  update = document.querySelector('.links ul');
  update.innerHTML = output.join('');

}()); //self executing function call
