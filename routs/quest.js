const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Quest = require('../views/Questions.jsx');

const questRout = express.Router();

questRout.get('/quest', (req, res) => {
  const home = React.createElement(Quest);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = questRout;