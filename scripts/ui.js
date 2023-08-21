export const authEle = {
  loginForm: document.querySelector("#login"),
  nameInp: document.querySelector("#name"),
  passInp: document.querySelector("#pass"),
  nameArea: document.querySelector(".name-warning"),
  passArea: document.querySelector(".pass-warning"),
};

export const mainEle = {
  pics: document.querySelectorAll("#profile-pic"),
  userName: document.querySelectorAll(".user-info #user-name"),
  userTag: document.querySelectorAll(".user-info #user-tag"),
  logoutBtn: document.querySelector("#logout-btn"),
  tweetsArea: document.querySelector(".tweets-area"),
};

// kullanıcı bilgilerini ekrana basar
export const renderUserInfo = (user) => {
  // kullanıcı resimlerini ekrana basar
  mainEle.pics.forEach((img) => (img.src = user.avatar));

  // kullanıcı ismini ekran basar
  mainEle.userName.innerText = user.name;

  mainEle.userTag.innerText = "@" + user.profile;
};

// media içeriğine göre HTML döndürür
const getMedia = (media) => {
  if (media.photo) {
    return `<img src=${media.photo[0].media_url_https} />`;
  }
  if (media.video) {
    return `
        <video controls>
        <source src="${media.video[0].variants[2].url}" />
         </video>`;
  }
  return "";
};

// kullanıcının tweetlerini ekrana basma
export const renderTimeline = (tweets) => {
  console.log(tweets);
  let timelineHTML = tweets
    .map(
      (tweet) => `
    <div class="tweet">
    <img
      id="user-img"
      src="https://pbs.twimg.com/profile_images/568096637042823168/xYhEhbZv_normal.jpeg"/>
    <div class="body">
      <div class="user">
        <div class="info">
          <h6>Ilker Teymur</h6>
          <p>@ilkerteymur51</p>
          <p>3 saat</p>
        </div>
        <i class="bi bi-three-dots"></i>
      </div>
      <div class="content">
        <p>${tweet.text}</p>
        ${getMedia(tweet.media)}
      </div>
      <div class="buttons">
        <button>
          <i class="bi bi-chat"></i>
          <span>91</span>
        </button>
        <button>
          <i class="bi bi-recycle"></i>
          <span>11</span>
        </button>
        <button>
          <i class="bi bi-heart"></i>
          <span>499</span>
        </button>
        <button>
          <i class="bi bi-bookmark"></i>
          <span>11</span>
        </button>
      </div>
    </div>
  </div>
    `
    )
    .join("");

  // oluşturduğumuz tweetleri HTML'e gönderme
  mainEle.tweetsArea.innerHTML = timelineHTML;
};
