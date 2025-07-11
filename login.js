const client_key = 'sbawrdi2z8wa4uuuwg';
const redirect_uri = encodeURIComponent('https://krishnajha23.github.io/tiktokapistuff/callback.html');
const scope = 'video.list';
const state = 'abc123';

document.getElementById('tiktok-login-btn').onclick = function () {
  const authUrl = `https://www.tiktok.com/v2/auth/authorize/?client_key=${client_key}&scope=${scope}&response_type=code&redirect_uri=${redirect_uri}&state=${state}`;
  window.location.href = authUrl;
};
