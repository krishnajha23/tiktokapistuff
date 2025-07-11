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
    })
    .catch(err => {
      console.log("gotcha")
      document.getElementById('output').textContent = 'Error: ' + err;
    });
} else {
  document.getElementById('output').textContent = 'No code in URL.';
}
