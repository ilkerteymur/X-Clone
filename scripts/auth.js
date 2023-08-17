import { authEle } from "./ui.js";
import { API } from "./api.js";
import { setLocal } from "./helpers.js";

const api = new API();

// şifre için kuralları içeren tanım
// min 1 küçük harf
// min 1 büyük harf
// min 1 sayı
// min 8 karakter
// min 1 özel karakter
const regex = "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$";

// uyarıları ekrana basar
const renderWarns = (nameWarn,passWarn) => {
    // isim uyarısı varsa ekrana bas yoksa eski uyarıyı sil
    if(nameWarn){
        authEle.nameArea.innerHTML = `
        <p class="warning">${nameWarn}</p>
        `;
    }else{
        authEle.nameArea.innerHTML = "";
    }

    // şifre uyarısı varsa ekrana bas yoksa eski uyarıyı sil
    if(passWarn){
        authEle.passArea.innerHTML = `
        <p class="warning">${passWarn}</p>
        `;
    }else{
        authEle.passArea.innerHTML = "";
    }
};

// formun gönderilme olayını izleme
authEle.loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let nameWarn = null;
    let passWarn = null;

    // değerlere erişme
   const name = authEle.nameInp.value;
   const pass = authEle.passInp.value;

   // ismi kontrol etme
   if(!name){
    nameWarn = "isim alanı zorunludur";
   }else if(name.length <= 3){
    nameWarn = "isim 4 karakterden kısa olamaz";
   }else{
    nameWarn = null;
   }

   // şifre kontrol etme
   if(!pass){
    passWarn = "Şifre alanı zorunludur"
   }else if(pass.length < 6){
    passWarn = "Şifre 6 karakterden kısa olamaz"
   }else if(!pass.match(regex)){
    passWarn = "şifre yeterince güçlü değil."
   }else{
    passWarn = null;
   }


    // uyarıları ekrana basma
    renderWarns(nameWarn,passWarn);
   
    // formu gönder
    if(!nameWarn && !passWarn){
      const userData = await api.getUser(name)
      
      //kullanıcıyı local'e ekler
      setLocal("user",userData);
      
      // kullanıcıyı ana sayfaya yönlendirir
      window.location = "/";
    }

});

