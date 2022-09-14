import React, {useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import style from './Menu.module.css';

export const Menu = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-secondary" style={{color: 'white'}}
                    className='m-1' onClick={handleShow}>
                Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className={style.buttonMenu} closeButton>

                    <Offcanvas.Title>Menu</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div className={style.buttonMenu}><NavLink to={'/'}>Home</NavLink></div>
                    <div className={style.buttonMenu}><NavLink to={'/'}>Home</NavLink></div>
                    <div className={style.buttonMenu}><NavLink to={'/'}>Home</NavLink></div>
                    <div className={style.buttonMenu}><NavLink to={'/'}>About Company</NavLink></div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );


};
