const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const tweet = formData.get('tweet-text');
  postTweet(tweet);
});


const postTweet = (tweet) => {
    const ul = document.getElementsByClassName('tweets-list')[0];
    console.log(ul)
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


  


  const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    
    pwFields.forEach(password => {
        if(password.type === "password"){
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
    })
    
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
   e.preventDefault(); //preventing form submit
   forms.classList.toggle("show-signup");
})
})
