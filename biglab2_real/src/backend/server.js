'use strict';

const express = require('express');
const res = require('../express/lib/response');
const morgan = require('morgan');
const dao = require('./dao');

// init express
const app = express();
const port = 3001;

// set up the middlewares
app.use(morgan('dev'));
app.use(express.json());

/*** APIs ***/

// GET /api/exams
app.get('/api/films', (request, response) => {
  dao.listExams()
  .then(films => response.json(films))
  .catch(() => response.status(500).end());
});

// GET /api/exams
app.get('/api/films/:id/:title/:favorite/:watchdate/:rating', (request, response) => {
    dao.listExams()
    .then(films => response.json(films))
    .catch(() => response.status(500).end());
  });

// UPDATE /api/films/<code>
/* ADD VALIDATION */
app.update('/api/films/:id', async (req, res) => {
  const filmToUpdate = req.body;

  if(req.params.id === req.body.id) {
    try {
      await dao.updateFilm(filmToUpdate);
      res.status(200).end();
    }
    catch(err) {
      console.error(err);
      res.status(503).json({error: `Database error while updating ${filmToUpdate.id}.`});
    }
  }
  else {
    res.status(503).json({error: `Wrong film if in the request body.`});
  }
});

app.put('/api/films/setFavorite/:id', async (req, res) => {
    try {
        await dao.toggleFavorite(req.params.id);
        res.status(200).end();
    }
    catch(err) {
        console.error(err);
        res.status(503).json({error: `Database error while toggling favorite ${freq.params.id}.`});
    }
});

app.delete('/api/films/:id', async (req, res) => {
    try {
        await dao.deleteFilm(req.params.id);
        res.status(200).end();
    }
    catch(err) {
        console.error(err);
        res.status(503).json({error: `Database error while deleting ${freq.params.id}.`});
    }
});

// activate the server
app.listen(port, () => console.log(`Server started at http://localhost:${port}.`));