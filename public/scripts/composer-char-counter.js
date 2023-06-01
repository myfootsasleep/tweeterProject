
$(document).ready(function() {
  console.log("loaded and ready for counting");

  $("#tweet-text").on("input", function() {
    const maxChar = 140;
    const inputChar = $(this).val().length;
    const charCounter = maxChar - inputChar;

    const counter = $(this).parent().find(".counter");

    counter.text(charCounter);

    if (charCounter < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "#545149");
    }
  });
});

