import './App.css';
import {useEffect, useState} from 'react';
import {Table, Col, Row, Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dayjs from 'dayjs';
import {Film, FilmLibrary} from "./FilmLibrary.js";
import { FilmRating } from "./components/FilmComponents.js";
import { Filter } from "./components/FilterComponent.js";
import { AddFilmFAB } from "./components/AddFilmFAB.js";
import { FilmForm } from "./components/FilmForm.js";

const FakeFilmList = [
  new Film(1,"Pulp Fiction", true, dayjs("March 10, 2022"), 5),
  new Film(2,"21 Grams", true, dayjs("March 17, 2022"), 4),
  new Film(3,"Star Wars"),
  new Film(4,"Matrix"),
  new Film(5,"Shrek", false, dayjs("March 21, 2022"), 3)
]

function SearchBar(props){
  return(
    <Form>
        <Form.Control type="text" placeholder="Search" />
    </Form>
  );
}

function UserIcon(props){
  return(
    <Button><i className="bi bi-person"></i></Button>
  );
}

function NavigationBar(props){
  return(
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">Film Library</Navbar.Brand>
        <Nav>
          <SearchBar />
          <UserIcon />
        </Nav>
      </Container>
    </Navbar>
  );
}

function App() {
  const [films, setFilms] = useState(FakeFilmList);
  const [filmsToShow, setFilmsToShow] = useState(films);
  const [showForm, setShowForm] = useState(false);

  const FilterAll = () => { setFilmsToShow(FakeFilmList) };
  const FilterFavorites = () => { setFilmsToShow(films => FakeFilmList.filter(f => f.isFavourite)) };
  const BestRated = () => { setFilmsToShow(films => FakeFilmList.filter(f => f.rating == 5)) };
  const SeenLastMonth = () => { setFilmsToShow(films => FakeFilmList.filter(f => f.watchDate != undefined).filter(f => f.watchDate.get('month') == dayjs().get('month')-1)) };
  const Unseen = () => { setFilmsToShow(films => FakeFilmList.filter(f => f.watchDate == undefined)) };

  const AddFilm = (film) => { setFilms(f => f.push(film))}
  const toggleForm = () => { showForm ? setShowForm(false) : setShowForm(true)}
  
  return (
    <Container className='App'>
      <Row>
        <NavigationBar />
      </Row>
      <Row>
        <Table>
          <tr>
            <td>
              <Filter FilterAll={FilterAll} FilterFavorites={FilterFavorites} BestRated={BestRated} SeenLastMonth={SeenLastMonth} Unseen={Unseen}/>
            </td>
            <td>
              <FilmRating films={filmsToShow} />
            </td>
          </tr>
        </Table>
      </Row>
      {showForm ? <FilmForm showForm={showForm} toggleForm={toggleForm} films={films} AddFilm={AddFilm}/> : ''}
      <AddFilmFAB toggleForm={toggleForm}/>
    </Container>
  );
}

export default App;
