import React, {useState} from 'react';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';


export default function Content_1() {

    const [upperCase, setUpperCase] = useState("");
    const [upperCase1, setUpperCase1] = useState("");

    // handleOnchange
    const handleOnchange = (event) => {
        /**
         * set the valuse to the uppercase state
         */
        setUpperCase(event.target.value);
    }

    const convertToUpperCase = () => {
        /**
         * get the uppercase and then convert to uppercase acuatilly and print to another text area
         */
        setUpperCase1(upperCase.toUpperCase())
    }


    return (
        <Container className="main-content d-flex justify-content-center align-items-center"
                   style={{minHeight: '100vh'}}>
            <Row className="w-100">
                <Col xs={12} md={8} lg={6} className="mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Input Your Text Here</Form.Label>
                            <Form.Control as="textarea" value={upperCase} onChange={handleOnchange} rows={6}/>
                        </Form.Group>
                        <Button variant="primary" onClick={convertToUpperCase}> Convert To Upper Case</Button>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Converted Result</Form.Label>
                            <Form.Control as="textarea" value={upperCase1} readOnly rows={6}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
