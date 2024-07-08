import React from 'react';
import {Button, Nav} from 'react-bootstrap';
import './side-bar.css'; // Import custom CSS for sidebar styling

const Sidebar = () => {
    return (
        <div className="sidebar-container">

            <Nav className="sidebar">

                <div className="sidebar-styling">
                    <Nav.Item>
                        <Nav.Link href="/home">Convert To Upper Case</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">Login From</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services">Registration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Table Design </Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </div>
    );
};

export default Sidebar;
