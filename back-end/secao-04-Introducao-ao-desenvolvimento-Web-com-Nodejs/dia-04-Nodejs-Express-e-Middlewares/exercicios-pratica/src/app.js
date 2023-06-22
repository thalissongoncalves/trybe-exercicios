const express = require('express');
const verifyName = require('./middlewares/verifyName');
const verifyPrice = require('./middlewares/verifyPrice');
const verifyDescription = require('./middlewares/verifyDescription');
const verifyCreatedAt = require('./middlewares/verifyCreatedAt');
const verifyRating = require('./middlewares/verifyRating');
const verifyDifficulty = require('./middlewares/verifyDifficulty');
const generateToken = require('./utils/randomToken');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/activities',
  verifyName,
  verifyPrice,
  verifyDescription,
  verifyCreatedAt,
  verifyRating,
  verifyDifficulty,
  auth,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  });

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;