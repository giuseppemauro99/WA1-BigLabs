import "bootstrap-icons/font/bootstrap-icons.css";
import {Container, Row, Col, Table, Button, ButtonGroup, FormCheck} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Film} from "../FilmLibrary.js";
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

function FilmRating(props){
    let filmToShow = [];
    switch(props.filter){
        case "All" :  filmToShow = props.films; break;
        case "FilterFavorites": filmToShow = [...props.films].filter(f => f.isFavourite); break;
        case "BestRated": filmToShow = [...props.films].filter(f => f.rating == 5); break;
        case "SeenLastMonth": filmToShow = [...props.films].filter(f => f.watchDate != undefined).filter(f => f.watchDate.get('month') == dayjs().get('month')-1); break;
        case "Unseen": filmToShow = [...props.films].filter(f => f.watchDate == undefined); break;
    }
    return(
        <Col>
            <FilmLibraryTable films={filmToShow} EditFilm={props.EditFilm} DeleteFilm={props.DeleteFilm} setfilmToEditFunc={props.setfilmToEditFunc} setEditingMode={props.setEditingMode}/>
        </Col>
    );
}

function FilmLibraryTable(props){
    return(
        <Table stripped="true" bordered>
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
                {props.films.map( (film) => <FilmLibraryRow key={film.id} film={film} EditFilm={props.EditFilm} DeleteFilm={props.DeleteFilm} setfilmToEditFunc={props.setfilmToEditFunc} setEditingMode={props.setEditingMode}/>) }
            </tbody>
        </Table>
    );
}

function FilmLibraryRow(props){
    const [isFavourite, setIsFavourite] = useState(props.film.isFavourite);
    const [rating, setRating] = useState(props.film.rating != undefined ? props.film.rating : 0);

    const editIsFavourite = (isFav) => {
        setIsFavourite(f => isFav);
        const film = new Film(props.film.id, props.film.title, isFav, props.film.watchDate, props.film.rating);
        props.EditFilm(film);
    }

    const editRating = (rat) => {
        setRating(r => rat);
        const film = new Film(props.film.id, props.film.title, props.film.isFavourite, props.film.watchDate, rat);
        props.EditFilm(film);
    }

    return(
        <tr>
            <td>{props.film.id}</td>
            <td style={isFavourite?{'color':'red'}:{'color':''}}>{props.film.title}</td>
            <td><FormCheck.Input type="checkbox" checked={isFavourite} onChange={() => editIsFavourite(!isFavourite)}/></td>
            <td>{props.film.watchDate != undefined ? props.film.watchDate.format('MMMM D, YYYY') : ""}</td>
            <td><RatingStars rating={rating} editRating={editRating}/></td>
            <td><Actions DeleteFilm={props.DeleteFilm} film={props.film} setfilmToEditFunc={props.setfilmToEditFunc} setEditingMode={props.setEditingMode}/></td>
        </tr>
    );
}

function RatingStars(props){
    if(props.rating == undefined)
        return(<FillStars count={0} editRating={props.editRating} />);
    else
        return(<FillStars count={props.rating} editRating={props.editRating} />);
}

function FillStars(props){
    const stars = [];
    let i=0;
    for(i=0;i<props.count;i++)
        stars.push(<Star key={i} ratingValue={i+1} isEmpty={false} editRating={props.editRating} />);
    for(;i<5;i++)
        stars.push(<Star key={i} ratingValue={i+1} isEmpty={true} editRating={props.editRating} />);
    return(<>{stars}</>);
}

function Star(props){
    return(<Button onClick={() => props.editRating(props.ratingValue)}><i className={props.isEmpty ? "bi bi-star":"bi bi-star-fill"}></i></Button>);
}

function Actions(props){
    
    return(
        <>
          <Link to={'/edit'} state={{film: props.film, filmWatchDate: props.film.watchDate ? props.film.watchDate.format('MMMM D, YYYY') : undefined}}><Button onClick={() => {props.setfilmToEditFunc(props.film); props.setEditingMode(true)}}><i className="bi bi-pencil-square"></i></Button></Link>
          <Button onClick={() => props.DeleteFilm(props.film)}><i className="bi bi-trash3" ></i></Button>
        </>
    );
}

export {FilmRating};
