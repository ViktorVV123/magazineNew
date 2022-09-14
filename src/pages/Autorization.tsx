import React from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Autorization = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Authorization</h2>
                <Form className='d-flex flex-column'>
                    <FormControl className='m-2' placeholder='enter your e-mail...'/>
                    <FormControl className='m-2' placeholder='enter your password...'/>

                        <div>Not have ak?
                            <a href={'#registation'}>Registation</a>
                            {/*вообще должен был быть NavLink и переносить на регестрацию*/}
                        </div>
                        <Button className='align-self-end' variant="outline-success" >Get in</Button>


                </Form>
            </Card>
        </Container>

    );
};

export default Autorization;