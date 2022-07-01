document.userName.addEventListener('submit', async (event) => {
  console.log(1234567);
  event.preventDefault();
  const userName = event.target.player.value;
  // console.log(userName);
  const res = await fetch('/user', {
    method: 'POST',
    body: JSON.stringify({ userName }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.status === 'ok') {
    window.location.href = '/themes';
  }
});
