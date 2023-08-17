export const authEle = {
    loginForm: document.querySelector("#login"),
    nameInp: document.querySelector("#name"),
    passInp: document.querySelector("#pass"),
    nameArea: document.querySelector(".name-warning"),
    passArea: document.querySelector(".pass-warning"),
};

export const mainEle = {
    pics: document.querySelectorAll('#profile-pic'),
};

// kullanıcı bilgilerini ekrana basar
export const renderUserInfo = (user) => {
    // kullanıcı resimlerini ekrana basar
    
    mainEle.pics.forEach((img) => (img.src = user.avatar));
    
    
    
  
};