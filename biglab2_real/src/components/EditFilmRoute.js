import {Table, Col, Row, Container, Navbar, Nav, Form, Button} from 'react-bootstrap';
import {FilmForm} from './FilmForm.js';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function EditFilmRoute(props){
    const location = useLocation();  

    return (
        <Container className='App'>
        <Row>
          <Col>
            <h1>Edit Film</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <FilmForm films={props.films} AddFilm={props.AddFilm} filmToEdit={location.state?.film} EditFilm={props.EditFilm} filmToEdit_watchDate={location.state?.filmWatchDate} editingMode={location.state ? false : true}/>
          </Col>
        </Row>
      </Container>
      );
}

export {EditFilmRoute};