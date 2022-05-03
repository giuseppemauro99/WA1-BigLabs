import './App.css';
import {useEffect, useState} from 'react';
import {Table, Col, Row, Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dayjs from 'dayjs';
import {Film} from "./FilmLibrary.js";
import {DefaultRoute} from "./components/DefaultRoute.js";
import {FilmRoute} from "./components/FilmRoute.js";
import {AddFilmRoute} from "./components/AddFilmRoute.js";
import {EditFilmRoute} from "./components/EditFilmRoute.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const FakeFilmList = [
  new Film(1,"Pulp Fiction", true, dayjs("March 10, 2022"), 5),
  new Film(2,"21 Grams", true, dayjs("March 17, 2022"), 4),
  new Film(3,"Star Wars"),
  new Film(4,"Matrix"),
  new Film(5,"Shrek", false, dayjs("March 21, 2022"), 3)
]

function App() {
  const [films, setFilms] = useState(FakeFilmList);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("All");
  const [editingMode, setEditingMode] = useState(false);
  const [filmToEdit, setfilmToEdit] = useState(undefined);

  const AddFilm = (film) => { setFilms(f => [...f,film])};

  const setfilmToEditFunc = (film) => { setfilmToEdit(f => film); setShowForm(true);};
  const EditFilm = (film) => { setFilms(fs => fs.map(f => f.id == film.id ? film : f)) };
  const DeleteFilm = (film) => {setFilms(f => f.filter( a => a != film)); }
  
  console.log("Film array contains:");//For debug purpose only
  console.log(films);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <FilmRoute films={films} EditFilm={EditFilm} filter={filter} DeleteFilm={DeleteFilm} setfilmToEditFunc={setfilmToEditFunc} setEditingMode={setEditingMode}/> } />
        <Route path='*' element={ <DefaultRoute/> } />
        <Route path="add" element={ <AddFilmRoute AddFilm={AddFilm} editingMode={false}/> } />
        <Route path="edit" element={ <EditFilmRoute AddFilm={AddFilm} filmToEdit={filmToEdit} EditFilm={EditFilm} editingMode={true}/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
