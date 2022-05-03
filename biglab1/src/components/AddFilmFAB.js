import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Button } from 'react-floating-action-button';
import {useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function AddFilmFAB(props) {
    const navigate = useNavigate();

    return (
            <Button
                tooltip="Add Film"
                icon="fas fa-plus"
                rotate={false}
                onClick={() => navigate('/add') }>+</Button>
    )
}

export { AddFilmFAB };