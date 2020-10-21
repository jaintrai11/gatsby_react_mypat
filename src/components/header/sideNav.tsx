import React, { useState } from "react"
import { Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap'
import './header.css'

interface Props {
    showSideNav?: string
}

const SideNav: React.FC<Props> = ({ showSideNav }) => (
    <>
        <Card bsPrefix="side-panel">
            <Card.Header>
                <div className="side-nav-header">
                    <span className="logo">
                    <img alt="..." className="hidden-lg img-width"
                     src="https://mypat.in//assets/img/s3-images/logo-mypat2.png" width="72" />
                    </span>
                    <div className="action-buttons">
                        <Button variant="primary" bsPrefix="login">
                            Login
                        </Button>
                        <Button variant="outline-primary" bsPrefix="signup">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className="pt-5 pb-0">
                <Nav className="flex-column" >
                    <Nav.Link bsPrefix="responsive-menu-item">
                    <span className="mr-2 visible-xs visible-sm">
                        <img alt="Courses" src="https://mypat.in/assets/img/s3-images/header-menu/courses.svg" />
                    </span>
                        Courses
                    </Nav.Link>
                    <NavDropdown bsPrefix="responsive-menu-item" 
                    title={
                        <>
                        <span className="mr-2 visible-xs visible-sm">
                            <img alt="Courses" 
                            src="https://mypat.in/assets/img/s3-images/header-menu/exam.svg" />
                        </span>
                        <p>MyExams</p>
                        </>
                    } 
                    id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">JEE Main</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">JEE Advanced</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">BITSAT</NavDropdown.Item>
                        <NavDropdown.Item href="#action">NTSE</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">KVPY</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown bsPrefix="responsive-menu-item"
                        title={
                            <>
                            <span className="mr-2 visible-xs visible-sm">
                                <img alt="Courses" 
                                src="https://mypat.in/assets/img/s3-images/header-menu/resource.svg" />
                            </span>
                            <p>Resources</p>
                            </>
                        } 
                     id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Webinar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">PREVIOUS YEAR PAPERS</NavDropdown.Item>
                        <NavDropdown.Item href="#action">JEE MAIN/ADVANCED</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">NTSE</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">KVPY</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">BOARD SAMPLE PAPER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">TOOLS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">JEE (M) PREP TRACKER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">JEE (A) PREP TRACKER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">BITSAT PREP TRACKER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">KVPY PREP TRACKER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">NTSE PREP TRACKER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">JEE (A) COLLEGE PREDICTOR</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">JEE (M) COLLEGE PREDICTOR</NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown bsPrefix="responsive-menu-item"
                        title={
                            <>
                            <span className="mr-2 visible-xs visible-sm">
                                <img alt="Community" 
                                src="https://mypat.in/assets/img/s3-images/header-menu/community.svg" />
                            </span>
                            <p>Community</p>
                            </>
                        } 
                     id="basic-nav-dropdown">
                        <NavDropdown.Item href="#feed">My Feed</NavDropdown.Item>
                        <NavDropdown.Item href="#questions">My Questions</NavDropdown.Item>
                        <NavDropdown.Item href="#answer">My Answers</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link bsPrefix="responsive-menu-item" href="#refer">
                        <span className="mr-2 visible-xs visible-sm">
                            <img alt="refer" 
                            src="https://mypat.in/assets/img/s3-images/header-menu/earn.svg" />
                        </span>
                        Refer & Earn
                    </Nav.Link>
                </Nav>
            </Card.Body>
            <Card.Footer>
                    <Button variant="primary" bsPrefix="login" className="download-btn">
                        <img src="https://mypat.in/assets/img/s3-images/header-menu/download.svg" alt="download-btn"/>&nbsp;&nbsp;
                        Download App
                    </Button>
            </Card.Footer>
        </Card>

    </>
);

export default SideNav;
