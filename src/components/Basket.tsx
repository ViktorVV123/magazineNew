import React, {useState} from 'react';
import style from './Menu.module.css'
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";



export const Basket=() =>{

    return (

        <Container >

            <div className={style.textBasket}>
            Корзина пуста
            </div>
        </Container>
    );
}

