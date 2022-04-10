import './App.css';
import {Table,Col,Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from 'dayjs';
import {Film, FilmLibrary} from "./FilmLibrary.js";

const FakeFilmList = [
  new Film(1,"Pulp Fiction", true, dayjs("March 10, 2022"), 5),
  new Film(2,"21 Grams", true, dayjs("March 17, 2022"), 4),
  new Film(3,"Star Wars"),
  new Film(4,"Matrix"),
  new Film(5,"Shrek", false, dayjs("March 21, 2022"), 3)
]

function PageTitle(props){
  return(
    <Col>
      <h1>My Fake Film List</h1>
    </Col>
  );
}

function App() {
  return (
    <Table>
      <Row>
        <PageTitle />
      </Row>
    </Table>
  );
}

export default App;
