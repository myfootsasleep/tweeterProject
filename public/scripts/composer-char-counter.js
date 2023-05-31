
$(document).ready(function() {
  console.log("loaded and ready for counting");

  $("#tweet-text").on("input", function() {
    const maxChar = 140;
    const inputChar = $(this).val().length;
    const charCounter = maxChar - inputChar;

    const $counterElement = $(this).parent().find(".counter");

    $counterElement.text(charCounter);

    if (charCounter < 0) {
      $counterElement.css("color", "red");
    } else {
      $counterElement.css("color", "#545149");
    }
  });
});

