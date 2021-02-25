const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/', (req, res) => {
  res.send("Root route!");
});

// app.get('/strings/hello/world', (req, res) => {
//   res.json({ result: "Hello, world!" });
//   res.sendStatus(200);
// });

// app.get('/strings/hello/world', (req, res) => {
//   res.status(200).json({ result: "Hello, world!" });
// });

app.get('/strings/hello/:string', (req, res) => {
  // const resString = `Hello, ${req.params.string}!`;
  // res.status(200).json({ result: resString });
  // res.status(200).json({ result: `Hello, ${req.params.string}!` });
  res.status(200).json({ result: sayHello(req.params.string) });
});

module.exports = app;
