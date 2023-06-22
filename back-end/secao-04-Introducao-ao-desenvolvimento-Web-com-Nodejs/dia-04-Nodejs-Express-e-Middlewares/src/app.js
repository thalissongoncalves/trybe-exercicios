const express = require('express');
const fs = require('fs').promises;
const path = require('path');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teamsRouter = require('./routes/teamsRouter');

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: 'Muitas requisições originadas desta IP', // mensagem personalizada quando atinge o limit rate
});

const app = express();
const PORT = 3000;
app.use(morgan('dev'));
app.use(express.static('./images'));
app.use(cors());
app.use(helmet());
app.use(limiter);
app.use('/teams', teamsRouter);

const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = require('./utils/teams');

app.use(express.json());
app.use(apiCredentials); 

app.get('/teams', async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './utils/teams.json'));
    const teamss = JSON.parse(data);
    return res.status(200).json({ teamss });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

app.use((error, _req, _res, next) => {
  console.error(error.stack);
  next(error);
});

app.use((error, _req, res, _next) => {
  res.status(500).send({ message: `Eita, deu ruim! ${error.message}` });
});

app.use((req, res) => res.sendStatus(404));

module.exports = app;
