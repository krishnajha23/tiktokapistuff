const params = new URLSearchParams(window.location.search);
const code = params.get('code');
if (code) {
  fetch('https://tiktokapibackend.onrender.com/get-access-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  })
    .then(res => res.json())
    .then(data => {
      const myresponse = JSON.stringify(data, null, 2);
      const accesstoken = data.access_token;
      console.log("ACCESS TOKEN: " + accesstoken)
      fetch('https://open.tiktokapis.com/v2/video/list/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(videoData => {
          console.log("Videos:", videoData);
        })
        .catch(err => {
          console.error("Video fetch error:", err);
        });

    })
    .catch(err => {
      console.log("CODE: " + code);
      document.getElementById('output').textContent = 'Error: ' + err;
    });
} else {
  document.getElementById('output').textContent = 'No code in URL.';
}
