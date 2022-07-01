const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Сервер шуршит шуршанками мой повелитель, порт: 3000');
});

app.get('/', (req, res) => {
  res.send('Привет, тут горим!');
});
