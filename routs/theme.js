const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Theme = require('../views/Themes');

const themeRout = express.Router();

themeRout.get('/theme', (req, res) => {
  const home = React.createElement(Theme);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = themeRout;