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
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("All");

  const AddFilm = (film) => { setFilms(f => [...f,film])};
  const toggleForm = () => { showForm ? setShowForm(false) : setShowForm(true)};

  const EditFilm = (film) => { setFilms(fs => fs.map(f => f.id == film.id ? film : f)) };
  const DeleteFilm = (film) => {setFilms(f => f.filter( a => a != film)); }
  
  console.log("Film array contains:");//For debug purpose only
  console.log(films);
  
  return (
    <Container className='App'>
      <Row>
        <NavigationBar />
      </Row>
      <Row>
        <Table>
          <tbody>
            <tr>
              <td>
                <Filter filter={filter} setFilter={setFilter}/>
              </td>
              <td>
                <FilmRating films={films} EditFilm={EditFilm} filter={filter} DeleteFilm={DeleteFilm}/>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      {showForm ? <FilmForm toggleForm={toggleForm} films={films} AddFilm={AddFilm} /> : ''}
      <AddFilmFAB toggleForm={toggleForm}/>
    </Container>
  );
}

export default App;
