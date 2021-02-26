const express = require('express');
const { sayHello, 
        uppercase,
        lowercase,
        firstCharacter,
        firstCharacters } = require('./lib/strings');
const { add,
        subtract,
        multiply,
        divide,
        remainder } = require('./lib/numbers');
const { negate,
        truthiness,
        isOdd,
        startsWith } = require('./lib/booleans');

const app = express();

app.use(express.json());

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

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) res.sendStatus(400);
  else res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400)
    .json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(a, b) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (!a || !b) {
    res.status(400)
    .json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(a))) {
    res.status(400)
    .json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  } 
});

app.post('/numbers/divide', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (a === undefined || b === undefined) {
    res.status(400)
    .json({ error: 'Parameters "a" and "b" are required.' });
  } else if (b === 0) {
    res.status(400)
    .json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(a))) {
    res.status(400)
    .json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  } 
});

app.post('/numbers/remainder', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (a === undefined || b === undefined) {
    res.status(400)
    .json({ error: 'Parameters "a" and "b" are required.' });
  } else if (b === 0) {
    res.status(400)
    .json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(a))) {
    res.status(400)
    .json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:value', (req, res) => {
  if (Number.isNaN(parseInt(req.params.value))) {
    res.status(400)
    .json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.value) });
  }
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const string = req.params.string;
  const char = req.params.char;
  if (char.length !== 1) {
    res.status(400)
    .json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(char, string) });
  }
});

module.exports = app;
