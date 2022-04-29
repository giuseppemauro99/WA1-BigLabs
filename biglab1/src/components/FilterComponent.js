import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Table, Button, ButtonGroup } from 'react-bootstrap';

function Filter(props) {
    return (
        <Col>
            <Row><Button variant="outline-primary" onClick={() => props.FilterAll()} active={true}>All</Button></Row>
            <Row><Button variant="outline-primary" onClick={() => props.FilterFavorites()}>Favorites</Button></Row>
            <Row><Button variant="outline-primary" onClick={() => props.BestRated()}>Best Rated</Button></Row>
            <Row><Button variant="outline-primary" onClick={() => props.SeenLastMonth()}>Seen Last Month</Button></Row>
            <Row><Button variant="outline-primary" onClick={() => props.Unseen()}>Unseen</Button></Row>
        </Col>
    );
}

export { Filter };