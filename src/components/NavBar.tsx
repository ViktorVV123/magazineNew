import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, Route} from "react-router-dom";
import {Basket} from "./Basket";
import {Menu} from "./Menu";


export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Menu/>
                <Nav className="ml-auto" style={{color: 'white'}}>

                    <NavLink to={'/autorisation'}>
                        <Button variant="outline-secondary" style={{color: 'white'}}
                                className='m-1'>Autorization</Button>
                    </NavLink>
                    <NavLink  to={'/Basket'}>

                        <Button variant="outline-secondary" style={{color: 'white'}}
                                className='m-1'>Корзина</Button>
                    </NavLink>

                </Nav>

            </Container>
        </Navbar>
    );
};

