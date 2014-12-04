$(document).ready(function() {
  "use strict";

  $.getJSON('js/data.json', function(info) {

    var output = [];

    $.each(info.links, function(i, arrValue) {
      $.each(arrValue, function(key, objValue) {
        output.push('<li id="' + key + '">');
        output.push('<a href="' + objValue);
        output.push('">' + key + '</a>');
        output.push('</li>');
      });
    });

    $('.links ul').html(output.join(''));

  }); //getJSON

}); // ready
