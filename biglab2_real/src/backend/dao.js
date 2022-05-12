'use strict';
/* Data Access Object (DAO) module for accessing films */

const sqlite = require('sqlite3');
const dayjs = require('dajs');
const { Film } = require('../FilmLibrary.js');

const db = new sqlite.Database('films.sqlite', err => { if (err) throw err;});

// get all films
exports.listFilms = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM films';
    db.all(sql, [], (err, rows) => {
      if(err)
        reject(err);
      else {
        const films = rows.map(row => new Film(row.id, row.title, row.favorite, row.watchdate == undefined ? undefined : dayjs(row.watchdate), row.rating));
        resolve(films);
      }
    });
  });
};

// get all films that match filter
exports.listFilmsWithFilter = (id, title, favorite, watchdate, rating) => {
    return new Promise((resolve, reject) => {
        try{
            const filmsFiltered = (await exports.listFilms()).filmsFiltered.filter(film => {
                if(id != undefined) if(id != film.id) return false;
                if(title != undefined) if(title != film.title) return false;
                if(favorite != undefined) if(favorite != film.favorite) return false;
                if(watchdate != undefined && film?.watchdate != undefined) if(watchdate != film?.watchdate) return false;
                if(rating != undefined && film?.rating != undefined) if(rating != film?.rating) return false;
                return true;
            });
            resolve(filmsFiltered);
        }
        catch(ex){
            reject(ex);
        }
    });
};

// add a new film
exports.addFilm = (film) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO films VALUES(?, ?, ?, DATE(?), ?)';
    db.run(sql, [film.id, film.title, film.favorite, film.watchdate?.format('YYYY-MM-DD'), film.rating ?? undefined], function(err) {
      if(err) reject(err);
      else resolve(this.lastID);
    });
  });
};

// update an existing film
exports.updateFilm = (film) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE films SET title=?, favorite=?, watchdate=DATE(?), rating=? WHERE id=?';
    db.run(sql, [film.title, film.favorite, film.watchdate?.format('YYYY-MM-DD'), film.rating ?? undefined, film.id], function(err) {
      if(err) reject(err);
      else resolve(film.id);
    });
  });
};

// toggleFavorite of a specific film
exports.toggleFavorite = (filmId) => {
  return new Promise((resolve, reject) => {
      try{
        let films = await exports.listFilms();
        films.forEach(film => {
            if(film.id == filmId){
                film.favorite = !film.favorite;
                await exports.updateFilm(film);
                resolve(filmId);
            }
        });
        reject('Error or not found ' + filmId);
      }catch(ex){
        reject(ex);
      }
  });
};

// delete an existing exam
exports.deleteFilm = (filmId) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM score WHERE coursecode=?';
      db.run(sql, [filmId], (err) => {
        if (err) reject(err);
        else resolve(null);
      });
    });
  };