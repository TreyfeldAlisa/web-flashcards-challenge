const express = require('express');

const app = express();

const homeRout = require('./routs/home');

app.use('/home', homeRout);

app.listen(3000, () => {
  console.log('Сервер шуршит шуршанками мой повелитель, порт: 3000');
});

app.get('/', (req, res) => {
  res.send('Привет, тут горим!');
});

app.get('/home', (req, res) => {
  res.send('Это Домашнаяя страница тут просим пользователя ввести своё Имя');
});

app.get('/themes', (req, res) => {
  res.send('Тут происходит выбор темы, напрягите своё сознание и думайте что темы существуют.');
});

app.get('/question/:queId', (req, res) => {
  res.send('Тут должны отобрааться вопросы через параметрический запрос');
});
