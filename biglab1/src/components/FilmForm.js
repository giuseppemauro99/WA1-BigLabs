import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Table, Button, ButtonGroup, Form, FormCheck } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {Film} from "../FilmLibrary.js";

function FilmForm(props) {
    console.log(props.filmToEdit);
    const editingMode = props.editingMode ? true : false;
    const [id, setId] = useState(props.filmToEdit ? props.filmToEdit.id : '');
    const [title, setTitle] = useState(props.filmToEdit ? props.filmToEdit.title : '');
    const [isFavourite, setIsFavourite] = useState(props.filmToEdit ? props.filmToEdit.isFavourite : false);
    const [watchDate, setWatchDate] = useState(props.filmToEdit ? (props.filmToEdit_watchDate ? dayjs(props.filmToEdit_watchDate).format('YYYY-MM-DD') : undefined ) : undefined);
    const [rating, setRating] = useState(props.filmToEdit ? props.filmToEdit.rating : 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const film = new Film(id, title, isFavourite, dayjs(watchDate), rating);
        if(editingMode)
            props.EditFilm(film);
        else
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
                <Form.Control type="text" placeholder="Enter title" required={true} value={title} onChange={event => setTitle(event.target.value)}/>
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