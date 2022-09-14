import React, {useState} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";


const TypeBar = () => {


    return (

        <ListGroup style={{cursor: 'pointer'}}>
            <ListGroup.Item onClick={() => {
            }} action href="#link1">Телефоны</ListGroup.Item>
            <ListGroup.Item onClick={() => {
            }} action href="#link2">Холодильники</ListGroup.Item>
            <ListGroup.Item onClick={() => {
            }} action href="#link3">Ноутбуки</ListGroup.Item>
            <ListGroup.Item onClick={() => {
            }} action href="#link4">Телевизоры</ListGroup.Item>

        </ListGroup>

    );
};

export default TypeBar;