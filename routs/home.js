const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Main = require('../views/Main');

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
module.exports = mainRout;
