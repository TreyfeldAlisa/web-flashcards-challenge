const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Main = require('../views/Main');
const { User } = require('../db/models');

const mainRout = express.Router();

mainRout.get('/', (req, res) => {
  res.redirect('./home');
});

mainRout.get('/home', (req, res) => {
  const home = React.createElement(Main);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

mainRout.post('/user', async (req, res) => {
  try{
  const userName = req.body.userName;
  await User.create({ name: userName });
  res.json({ status: 'ok' });
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

module.exports = mainRout;
