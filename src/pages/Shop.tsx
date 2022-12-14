import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "./TypeBar";
import BrandBar from "../components/BrandBar";


export const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    < BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};

