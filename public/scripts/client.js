/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.

// Fake data taken from initial-tweets.json
$(document).ready(function() {
  console.log("Client.js scripts are up and running");

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
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
          <div>${data.created_at}</div>
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

  //const $tweet = createTweetElement(tweetData);
  const $tweet = createTweetElement(tweetData);
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('main').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

