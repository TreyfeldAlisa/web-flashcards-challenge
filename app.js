const express = require('express');
require('@babel/register');

const app = express();

const mainRout = require('./routs/home');

app.use(express.urlencoded({ extender: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', mainRout);

app.listen(3000, () => {
  console.log('Сервер шуршит шуршанками мой повелитель, порт: 3000');
});

// app.get('/', (req, res) => {
//   res.send('Привет, тут горим!');
// });

// app.get('/themes', (req, res) => {
//   res.send('Тут происходит выбор темы, напрягите своё сознание и думайте что темы существуют.');
// });

// app.get('/question/:queId', (req, res) => {
//   res.send('Тут должны отобрааться вопросы через параметрический запрос');
// });
