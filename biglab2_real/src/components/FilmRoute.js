import {Table, Col, Row, Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import { FilmRating } from "./FilmComponents.js";
import { Filter } from "./FilterComponent.js";
import { AddFilmFAB } from "./AddFilmFAB.js";

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

function FilmRoute(props){
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
                    <Filter filter={props.filter} setFilter={props.setFilter}/>
                  </td>
                  <td>
                    <FilmRating films={props.films} EditFilm={props.EditFilm} filter={props.filter} DeleteFilm={props.DeleteFilm} setfilmToEditFunc={props.setfilmToEditFunc} setEditingMode={props.setEditingMode}/>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <AddFilmFAB/>
        </Container>
      );
}

export {FilmRoute};