const CLIENT_ID = "1525141275542552700";

const REDIRECT_URI = "https://store.limitlezzhosts.qzz.io/callback.html";

const loginBtn = document.getElementById("discord-login");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {

        const url =
        `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}` +
        `&response_type=token` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&scope=identify%20email`;

        window.location.href = url;

    });
}
