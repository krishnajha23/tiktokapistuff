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
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
      const token = data.access_token;
      const openid = data.open_id;
      fetch('https://open.tiktokapis.com/v2/video/list/?fields=cover_image_url,id,title', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          open_id: openid
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log("Video list response:", data);
        })
        .catch(err => {
          console.error("Error fetching video list:", err);
        });
    })
    .catch(err => {
      console.log("CODE: " + code);
      document.getElementById('output').textContent = 'Error: ' + err;
    });
} else {
  document.getElementById('output').textContent = 'No code in URL.';
}
