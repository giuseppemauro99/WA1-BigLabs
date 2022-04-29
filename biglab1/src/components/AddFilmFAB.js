import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Button, Link } from 'react-floating-action-button';
import {useEffect, useState} from 'react';

function AddFilmFAB(props) {
    const [buttonText, setButtonText] = useState("Add Film");
    const toggleButtonText = () => { buttonText == "Add Film" ? setButtonText(t => "Close") : setButtonText(t => "Add Film")};

    return (
            <Button
                tooltip="Add Film"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => {toggleButtonText(); props.toggleForm()} }>{buttonText}</Button>
    )
}

export { AddFilmFAB };