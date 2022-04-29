import "bootstrap-icons/font/bootstrap-icons.css";
import { startTransition } from "react";
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
            <td>{props.film.watchDate != undefined ? props.film.watchDate.format('MMMM D, YYYY') : ""}</td>
            <td><RatingStars rating={props.film.rating} /></td>
            <td><Actions exam={props}/></td>
        </tr>
    );
}

function RatingStars(props){
    if(props.rating == undefined)
        return( <EmptyStars count={5}/> );
    else
        return(<><FillStars count={props.rating}/><EmptyStars count={5-props.rating}/></>);
}

function FillStars(props){
    const stars = [];
    for(let i=0;i<props.count;i++)
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
    return(<>{stars}</>);
}

function EmptyStars(props){
    const stars = [];
    for(let i=0;i<props.count;i++)
        stars.push(<i key={i} className="bi bi-star"></i>);
    return(<>{stars}</>);
}

function Actions(){
    return(
        <>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash3"></i>
        </>
    );
}

export {FilmRating};
