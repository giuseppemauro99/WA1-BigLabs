import './App.css';
import {Table, Col, Row, Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dayjs from 'dayjs';
import {Film, FilmLibrary} from "./FilmLibrary.js";
import {FilmRating, Filter} from "./components/FilmComponents.js";

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
  return (
    <Container className='App'>
      <Row>
        <NavigationBar />
      </Row>
      <Row>
        <Table>
          <tr>
            <td>
              <Filter />
            </td>
            <td>
              <FilmRating films={FakeFilmList} />
            </td>
          </tr>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
