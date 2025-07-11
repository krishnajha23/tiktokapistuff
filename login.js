document.getElementById('tiktok-login-btn').onclick = function () {
  console.log("HAHAHA");
  fetch('https://tiktokapibackend.onrender.com/get-login-url')
    .then(res => res.json())
    .then(data => {
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Failed to get TikTok login URL');
      }
    })
    .catch(err => {
      console.error('Error getting login URL:', err);
    });
};
