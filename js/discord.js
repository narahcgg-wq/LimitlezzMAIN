// ======================================
// LIMITLEZZ DISCORD LOGIN
// ======================================

const CLIENT_ID = "1525141275542552700";

const REDIRECT_URI =
"https://store.limitlezzhosts.qzz.io/callback.html";

// --------------------
// Login Button
// --------------------

const loginBtn = document.getElementById("discord-login");

if(loginBtn){

loginBtn.addEventListener("click",(e)=>{

e.preventDefault();

const url =
`https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}` +
`&response_type=token` +
`&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
`&scope=identify%20email`;

window.location.href = url;

});

}

// --------------------
// Load User
// --------------------

const user = JSON.parse(localStorage.getItem("discord_user"));

if(user){

if(loginBtn){
loginBtn.style.display="none";
}

const profile=document.getElementById("user-profile");

if(profile){

profile.style.display="flex";

document.getElementById("user-name").textContent=user.username;

document.getElementById("user-avatar").src=
`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

}

}

// --------------------
// Logout
// --------------------

const logout=document.getElementById("logout-btn");

if(logout){

logout.addEventListener("click",()=>{

localStorage.removeItem("discord_token");
localStorage.removeItem("discord_user");

location.reload();

});

}



// ======================
// PROFILE DROPDOWN
// ======================

const profile = document.getElementById("user-profile");
const dropdown = document.querySelector(".profile-dropdown");

if(profile && dropdown){

profile.addEventListener("click",(e)=>{

e.stopPropagation();

dropdown.classList.toggle("show");

});

document.addEventListener("click",()=>{

dropdown.classList.remove("show");

});

}

// ======================
// LOGOUT
// ======================

const logoutBtn=document.getElementById("logout-btn");

if(logoutBtn){

logoutBtn.addEventListener("click",(e)=>{

e.preventDefault();

localStorage.removeItem("discord_token");
localStorage.removeItem("discord_user");

location.reload();

});

}
