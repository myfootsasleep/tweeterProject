/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.

// Fake data taken from initial-tweets.json
$(document).ready(function() {
  console.log("Client.js scripts are up and running");
  
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    for (let i of tweets) {
      const createTweet = createTweetElement(i);
      $(".tweetContainer").prepend(createTweet);
    }
  };

  const createTweetElement = function(data) {
    const safeHTML = `<p>${escape(data.content.text)}</p>`;
    const markup = `
    <article>
        <footer>
          <div class="footer-tags">
          <div> 
            <img src= ${data.user.avatars} alt="Avatar Images">
            ${data.user.name}
          </div>
          <div>${data.user.handle}</div>
        </div>
        </footer>
        <header>
       ${safeHTML}
        <div class ="header-tags">
          <div>${timeago.format(data.created_at)}</div>
        <div class = "header-icons">
          <i class="fa-regular fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
        </header>
      </article>
      `;
    return markup;
  };

  $("form").on("submit", function(event) {
    event.preventDefault();
    $(".errorMessage").hide();
    let textVal = $("#tweet-text").val().length;
    if (textVal === 0 || textVal === null) {
      $("#actualErrorMessage").replaceWith("<div id = actualErrorMessage>Can't leave blank!</div>");
      $(".errorMessage").slideDown();
    } else if (textVal > 140) {
      $("#actualErrorMessage").replaceWith("<div id = actualErrorMessage>Can't exceed the limit of text!</div");
      $(".errorMessage").slideDown();
    } else {
      $.post("/tweets", $(this).serialize())
        .then(loadTweets);
    }
  });
  const loadTweets = () => {
    $.ajax("/tweets")
      .then(function(tweets) {
        renderTweets(tweets);
      });
  };
  loadTweets();

});


