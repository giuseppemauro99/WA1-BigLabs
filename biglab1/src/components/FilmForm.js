import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Table, Button, ButtonGroup, Form } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';

function FilmForm(props) {
    const [id, setId] = useState(props.film ? props.film.code : '');
    const [title, setTitle] = useState(props.film ? props.film.name : '');
    const [isFavourite, setIsFavourite] = useState(props.film ? props.film.score : 30);
    const [watchDate, setWatchDate] = useState(props.film ? props.film.date : dayjs());
    const [rating, setRating] = useState(props.film ? props.film.date : dayjs());

    const handleSubmit = (event) => {
        event.preventDefault();
        const film = {Id: id, title: title, isFavourite: isFavourite, watchDate: dayjs(watchDate), rating: rating};
        
        if(props.film === undefined)
            props.AddFilm(film);
        //else
            //props.editFilm(film);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>id</Form.Label>
                <Form.Control type="number" placeholder="Enter id" onChange={event => setId(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={event => setTitle(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>isFavourite</Form.Label>
                <Form.Control type="checkbox" placeholder="Enter isFavourite" onChange={event => setIsFavourite(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>watchDate</Form.Label>
                <Form.Control type="date" placeholder="Enter watchDate" onChange={event => setWatchDate(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>rating</Form.Label>
                <Form.Control type="number" placeholder="Enter rating" onChange={event => setRating(event.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">Save</Button> 
            <Button variant="danger" onClick={props.cancel} >Cancel</Button>
        </Form>
    )
}

export {FilmForm};