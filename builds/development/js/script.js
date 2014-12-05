$(function() {

  "use strict";

  $.getJSON('js/data.json', function(data) {
    var template = $('#speakerstpl').html();
    var html = Mustache.to_html(template, data);
    $('.carousel').html(html);

    $('.carousel').slick({
      autoplay: true,
      arrows: true,
      dots: true
    });

  }); //getJSON

}); //function
