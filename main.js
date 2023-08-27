import { getLocal } from './scripts/helpers.js';
import { mainEle, renderLoader, renderTimeline, renderUserInfo, } from './scripts/ui.js';
import { API } from './scripts/api.js';

const api = new API();

//! Olay İzleyicileri
// sayfanın yüklenmesi
document.addEventListener('DOMContentLoaded', async () => {
  // local'den kullanıcı bilgilerini alıp ekrana bas
  const user = getLocal('user');
  renderUserInfo(user);


  // ekrana loading basar
  renderLoader(mainEle.tweetsArea);

  // anasayafada gösterilecek tweetleri alma
 const data = await api.fectData("/timeline.php","screenname",user.profile)
  //tweetleri ekrana basma
  renderTimeline(user,data.timeline);

});

// çıkış butonuna tıklanma
mainEle.logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location = '/auth.html';
});

// hem sayfa yüklendiğinde hem hashtag değiştiğinde
// detay alanını ekrana bas

const controlURL = () => {
  const path = location.search;
  console.log(window.location.hash);

  if(path === "?status"){
    console.log("detay sayfasında");
  }
}


["hashchange","load"].forEach((event)=>{
  window.addEventListener(event,controlURL);
});