//jshint esversion:6
alert("hello");
var root = $(":root");
var darkMode = true;

$(document).ready(function() {
  $("button").on('click touchstart', function() {
    alert('Click');
  });
});

$(document).on("click", "button[name='mode-button']", function() {
  // var checked = $("input").prop("checked");
  //light theme
  if (darkMode === true) {
    alert("darkMode");
    root.css("--bg-color", "white");
    root.css('--top-color', "hsl(225, 100%, 98%)");
    root.css("--head-color", "hsl(230, 17%, 14%)");
    root.css("--text-color", "hsl(228, 12%, 44%)");
    root.css("--card-bg", "hsl(227, 47%, 96%)");
    darkMode = false;
  } else {
    // dark theme
    alert("lightMode");
    root.css("--bg-color", "hsl(230, 17%, 14%)");
    root.css("--top-color", "hsl(232, 19%, 15%)");
    root.css("--head-color", "white");
    root.css("--text-color", "hsl(228, 34%, 66%)");
    root.css("--card-bg", "hsl(228, 28%, 20%)");
    darkMode = true;
  }
});
