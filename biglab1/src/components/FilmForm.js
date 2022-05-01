import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Table, Button, ButtonGroup, Form, FormCheck } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {Film} from "../FilmLibrary.js";

function FilmForm(props) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [isFavourite, setIsFavourite] = useState(false);
    const [watchDate, setWatchDate] = useState(dayjs().format('YYYY-MM-D'));
    const [rating, setRating] = useState(undefined);

    const handleSubmit = (event) => {
        event.preventDefault();
        const film = new Film(id, title, isFavourite, dayjs(watchDate), rating);
        props.AddFilm(film);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>id</Form.Label>
                <Form.Control type="number" placeholder="Enter id" required={true} value={id} onChange={event => setId(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" required={true} minLength={1} value={title} onChange={event => setTitle(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>isFavourite</Form.Label>
                <FormCheck type="checkbox" placeholder="Enter isFavourite" checked={isFavourite} onChange={() => setIsFavourite(!isFavourite)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>watchDate</Form.Label>
                <Form.Control type="date" placeholder="Enter watchDate" value={watchDate} onChange={event => setWatchDate(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>rating</Form.Label>
                <Form.Control type="number" placeholder="Enter rating" value={rating} min={0} max={5} onChange={event => setRating(event.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">Save</Button> 
            <Button variant="danger" onClick={props.cancel}>Cancel</Button>
        </Form>
    )
}

export {FilmForm};