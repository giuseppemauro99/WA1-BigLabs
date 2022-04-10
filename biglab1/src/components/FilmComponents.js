import "bootstrap-icons/font/bootstrap-icons.css";
import {Container, Row, Col, Table, Button, ButtonGroup} from 'react-bootstrap';

function FilmRating(props){
    return(
        <Col>
            <FilmLibraryTable films={props.films} />
        </Col>
    );
}

function FilmLibraryTable(props){
    return(
        <Table stripped bordered>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>isFavourite</th>
                    <th>watchDate</th>
                    <th>rating</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.films.map( (film) => <FilmLibraryRow key={film.id} film={film}/> ) }
            </tbody>
        </Table>
    );
}

function FilmLibraryRow(props){
    return(
        <tr>
            <td>{props.film.id}</td>
            <td>{props.film.title}</td>
            <td>{props.film.isFavourite ? "true" : "false" }</td>
            <td>{props.film.watchDate != undefined ? props.film.watchDate.format('YYYY-MM-DD') : ""}</td>
            <td>{props.film.rating}</td>
            <td>Actions</td>
        </tr>
    );
}

function Filter(props){
    return (
      <>
        <h3>Filter:</h3>
        <>
        <ButtonGroup  className="btn-group-vertical">
          <Button variant="outline-primary">All</Button>
          <Button variant="outline-primary">Favorites</Button>
          <Button variant="outline-primary">Best Rated</Button>
          <Button variant="outline-primary">Seen Last Month</Button>
          <Button variant="outline-primary">Unseen</Button>
        </ButtonGroup>
        </>
      </>
    );
  }

export {FilmRating, Filter};
