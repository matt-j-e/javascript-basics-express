const express = require('express');
const { sayHello, 
        uppercase,
        lowercase,
        firstCharacter } = require('./lib/strings');

const app = express();

app.get('/', (req, res) => {
  res.send("Root route!");
});

app.get('/strings/hello/:string', (req, res) => {
  // const resString = `Hello, ${req.params.string}!`;
  // res.status(200).json({ result: resString });
  // res.status(200).json({ result: `Hello, ${req.params.string}!` });
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

module.exports = app;
