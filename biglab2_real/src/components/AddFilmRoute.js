import {Table, Col, Row, Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import {FilmForm} from './FilmForm.js';

function AddFilmRoute(props){
    return (
        <Container className='App'>
        <Row>
          <Col>
            <h1>Add Film</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <FilmForm films={props.films} AddFilm={props.AddFilm} filmToEdit={props.filmToEdit} EditFilm={props.EditFilm} editingMode={props.editingMode}/>
          </Col>
        </Row>
      </Container>
      );
}

export {AddFilmRoute};