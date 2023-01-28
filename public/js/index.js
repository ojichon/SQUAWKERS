

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
    <section class="tweets">
    <ul class="tweets-list">
        <li class="tweet-item">
            <span class="avatar">J</span>
            <div class="tweet-details">
                <strong class="author">John Doe</strong>
                <p class="tweet-text">${tweet}</p>
                <small class="timestamp">${time}</small>
                <span class="thumbs">
                    <button type="submit">
                        <img src="thumbs-up.png">
                    </button>
                    <button type="submit">
                        <img src="thumbs-down.png">
                    </button>
                </span>
            </div>
    </ul>
    </section>
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


  fetch('https://api.ritekit.com/v1/search/trending?green=1&latin=1%27)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let hashArray = data.tags
 


     document.querySelector(".hashtag").innerHTML = hashArray.slice(0,hashArray.length > 10?10: hashArray.length - 1).map((hash)=> hash.tag)


    }))
