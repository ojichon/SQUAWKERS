const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const tweet = formData.get('tweet-text');
  console.log(tweet);
});


const postTweet = (tweet) => {
    const ul = document.querySelector('.tweets-list');
    const today = new Date();
    const time = today.toLocaleTimeString();
    const tweetContent = `
      <li class="tweet-item">
        <span class="avatar">A</span>
        <div class="tweet-details">
          <strong class="author">Anonymous</strong>
          <p class="tweet-text">${tweet}</p>
          <small class="timestamp">${time}</small>
        </div>
      </li>
    `;
    ul.innerHTML += tweetContent;
  }