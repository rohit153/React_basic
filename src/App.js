import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from './side-bar/side-bar';
import NavScroll from './nav-bar/nav-bar';
import Content_1 from "./Content/Content_1";

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0">
                        <Sidebar/>
                    </Col>
                    <Col md={10} className="p-0">
                        <NavScroll/>
                        {/* Add your main content here */}
                        <Content_1></Content_1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
