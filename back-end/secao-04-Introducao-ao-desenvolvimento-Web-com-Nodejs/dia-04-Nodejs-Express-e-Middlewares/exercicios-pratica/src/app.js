const express = require('express');
const verifyName = require('./middlewares/verifyName');
const verifyPrice = require('./middlewares/verifyPrice');
const verifyDescription = require('./middlewares/verifyDescription');
const verifyCreatedAt = require('./middlewares/verifyCreatedAt');
const verifyRating = require('./middlewares/verifyRating');
const verifyDifficulty = require('./middlewares/verifyDifficulty');

const app = express();

app.use(express.json());

app.post('/activities',
  verifyName,
  verifyPrice,
  verifyDescription,
  verifyCreatedAt,
  verifyRating,
  verifyDifficulty,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  });

module.exports = app;