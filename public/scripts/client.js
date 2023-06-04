/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.

// Fake data taken from initial-tweets.json
$(document).ready(function() {
  console.log("Client.js scripts are up and running");


  const renderTweets = function(tweets) {
    for (let i of tweets) {
      const createTweet = createTweetElement(i);
      $(".tweetContainer").prepend(createTweet);
    }
  };

  const createTweetElement = function(data) {
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
        <p>
        ${data.content.text}
        </p>
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
    let textVal = $("#tweet-text").val().length;
    if (textVal === 0 || textVal === null) {
      alert("Tweet field can't be empty or null");
    } else if (textVal > 140) {
      alert("Tweet cannot exceed the character limit");
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


