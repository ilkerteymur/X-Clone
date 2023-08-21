import { getLocal } from './scripts/helpers.js';
import { mainEle, renderTimeline, renderUserInfo, } from './scripts/ui.js';
import { API } from './scripts/api.js';

const api = new API();

//! Olay İzleyicileri
// sayfanın yüklenmesi
document.addEventListener('DOMContentLoaded', async () => {
  // local'den kullanıcı bilgilerini alıp ekrana bas
  const user = getLocal('user');
  renderUserInfo(user);
  // anasayafada gösterilecek tweetleri alma
 const data = await api.fectData("/timeline.php","screenname",user.profile)
  //tweetleri ekrana basma
  renderTimeline(data.timeline);

});

// çıkış butonuna tıklanma
mainEle.logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location = '/auth.html';
});