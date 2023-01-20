const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const tweet = formData.get('tweet-text');
  console.log(tweet);
});