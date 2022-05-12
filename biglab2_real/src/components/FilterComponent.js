import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Container, Row, Col, Table, Button, ButtonGroup } from 'react-bootstrap';

function Filter(props) {
    return (
        <>
            <Col>
                <h5>Filter: {props.filter}</h5>
            </Col>
            <Col>
                <Row><Button variant="outline-primary" onClick={() => props.setFilter(s => "All")} active={props.filter == "All" ? true: false}>All</Button></Row>
                <Row><Button variant="outline-primary" onClick={() => props.setFilter(s => "FilterFavorites")} active={props.filter == "FilterFavorites" ? true: false}>Favorites</Button></Row>
                <Row><Button variant="outline-primary" onClick={() => props.setFilter(s => "BestRated")} active={props.filter == "BestRated" ? true: false}>Best Rated</Button></Row>
                <Row><Button variant="outline-primary" onClick={() => props.setFilter(s => "SeenLastMonth")} active={props.filter == "SeenLastMonth" ? true: false}>Seen Last Month</Button></Row>
                <Row><Button variant="outline-primary" onClick={() => props.setFilter(s => "Unseen")} active={props.filter == "Unseen" ? true: false}>Unseen</Button></Row>
            </Col>
        </>
    );
}

export { Filter };