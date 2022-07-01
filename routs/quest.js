const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Quest = require('../views/Questions.jsx');
const Quest1 = require('../views/Questions1.jsx');
const Quest2 = require('../views/Questions2.jsx');
const Quest3 = require('../views/Questions3.jsx');
const Quest4 = require('../views/Questions4.jsx');
const Quest5 = require('../views/Questions5.jsx');
const Quest6 = require('../views/Questions6.jsx');

const questRout = express.Router();

questRout.get('/quest', (req, res) => {
  const home = React.createElement(Quest);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


questRout.get('/quest/1', (req, res) => {
  const home = React.createElement(Quest1);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


questRout.get('/quest/2', (req, res) => {
  const home = React.createElement(Quest2);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


questRout.get('/quest/3', (req, res) => {
  const home = React.createElement(Quest3);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


questRout.get('/quest/4', (req, res) => {
  const home = React.createElement(Quest4);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


questRout.get('/quest/5', (req, res) => {
  const home = React.createElement(Quest5);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


questRout.get('/quest/6', (req, res) => {
  const home = React.createElement(Quest6);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = questRout;


