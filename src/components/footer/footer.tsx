import React, { useState } from "react"
import { Accordion, Card, Button, ListGroup, useAccordionToggle, Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

import './footer.css';
import { Link } from "gatsby";

interface Props {
    siteTitle?: string
    eventKey: string;
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    
    return {
      width,
      height
    };
}

const Footer: React.FC<Props> = ({ siteTitle, eventKey }) => {
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    window.onresize = getWindowDimensions;
    return(
    <>
    <div className="footer-container">
        <div className="footer-row">
            <div className="footer-item w-100">
                    <Accordion defaultActiveKey="0">
                        <div className="menu">
                        <Accordion.Toggle  as={Button}
                        disabled = { windowDimensions.width > 900 ? true : false}
                        variant="link" 
                         eventKey="0">
                            Features
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ListGroup>
                                <ListGroup.Item>Community</ListGroup.Item>
                                <ListGroup.Item>Courses</ListGroup.Item>
                                <ListGroup.Item>Refer & Earn</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        </div>
                    </Accordion>
                    <Accordion defaultActiveKey="1">
                        <div className="menu">
                        <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="1">
                            Resources
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ListGroup>
                                <ListGroup.Item>Blog</ListGroup.Item>
                                <ListGroup.Item>Webinar</ListGroup.Item>
                                <ListGroup.Item>Support</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        </div>
                    </Accordion>
            </div>

            <div className="footer-item w-100">
                <Accordion defaultActiveKey="2">
                        <div className="menu">
                        <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="2">
                            EXAMINATIONS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <ListGroup>
                                <ListGroup.Item>Jee Main</ListGroup.Item>
                                <ListGroup.Item>Jee Advanced</ListGroup.Item>
                                <ListGroup.Item>Bitsat</ListGroup.Item>
                                <ListGroup.Item>NTSE</ListGroup.Item>
                                <ListGroup.Item>KVPY</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        </div>
                </Accordion>
                <Accordion defaultActiveKey="3">
                        <div className="menu">
                        <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="3">
                            FREE MOCKUP TESTS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <ListGroup>
                                <ListGroup.Item>JEE MAIN MOCK TEST</ListGroup.Item>
                                <ListGroup.Item>JEE ADVANCED MOCK TEST</ListGroup.Item>
                                <ListGroup.Item>BITSAT MOCK TEST</ListGroup.Item>
                                <ListGroup.Item>KVPY MOCK TEST</ListGroup.Item>
                                <ListGroup.Item>NTSE MOCK TEST</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        </div>
                </Accordion>
            </div>

            <div className="footer-item w-100">
                <Accordion defaultActiveKey="4">
                    <div className="menu">
                    <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="4">
                        TOOLS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <ListGroup>
                            <ListGroup.Item>JEE MAIN PREP TRACKER</ListGroup.Item>
                            <ListGroup.Item>JEE ADVANCED PREP TRACKER</ListGroup.Item>
                            <ListGroup.Item>BITSAT PREP TRACKER</ListGroup.Item>
                            <ListGroup.Item>KVPY PREP TRACKER</ListGroup.Item>
                            <ListGroup.Item>NTSE PREP TRACKER</ListGroup.Item>
                            <ListGroup.Item>JEE ADVANCED COLLEGE PREDICTOR</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>

            <div className="footer-item w-100">
                <Accordion defaultActiveKey="5">
                        <div className="menu">
                        <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="5">
                        PREVIOUS TEST PAPERS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <ListGroup>
                                <ListGroup.Item>JEE MAIN AND ADVANCED</ListGroup.Item>
                                <ListGroup.Item>NTSE</ListGroup.Item>
                                <ListGroup.Item>KVPY</ListGroup.Item>
                                <ListGroup.Item>BOARD SAMPLE PAPER</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        </div>
                </Accordion>
                <Accordion defaultActiveKey="6">
                        <div className="menu">
                        <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="6">
                            E-BOOKS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <ListGroup>
                                <ListGroup.Item>ULTIMATE GUIDE TO JEE MAIN EXAM</ListGroup.Item>
                                <ListGroup.Item>TIPS TO CRACK BITSAT BY TOPPERS</ListGroup.Item>
                                <ListGroup.Item>HOW TO PREPARE FOR KVPY</ListGroup.Item>
                                <ListGroup.Item>TOP 5 PREPARATION TIPS FOR NTSE</ListGroup.Item>
                                <ListGroup.Item>ONE-MONTH MANTRA TO CRACK JEE MAIN 2020</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        </div>
                </Accordion>
            </div>

            <div className="footer-item w-100">
                <Accordion defaultActiveKey="7">
                    <div className="menu">
                    <Accordion.Toggle  as={Button} disabled = { windowDimensions.width > 900 ? true : false}  variant="link" eventKey="7">
                    CALL US AT
                    </Accordion.Toggle>
                    
                    <Accordion.Collapse eventKey="7">
                        <div className="call-details">
                            <strong>1800-121-0206 (TOLL FREE)</strong>
                            <p>10 AM - 9 PM (All 7 Days)</p>

                            <strong>*Except National Holidays</strong>

                            <p>Email ID: support@mypat.in</p>

                            <strong>ADDRESS</strong>
                            <p>N 161 A, Saira Tower, 2nd Floor Gulmohar Commercial Complex, Green Park, New Delhi – 110049</p>

                            <strong>DOWNLOAD OUR APP</strong>

                            <div>
                                <Nav.Link className="p-0" href="https://play.google.com/store/apps/details?id=com.mypat">
                                <img src="https://mypat.in/assets/img/s3-images/android-ico.png" alt="android" />
                                </Nav.Link>
                            </div>
                        </div>
                    </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
        </div>

        <div className="footer-menu mt-5">
            <Container fluid={true}>
                <Row>
                    <Col sm={12} md={9}>
            <div className="menu-bar">
                <ul className="p-0">
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">About Us</Nav.Link>
                    </li>
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">Methodology</Nav.Link>
                    </li>
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">Terms of Use</Nav.Link>
                    </li>
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">Privacy Policy</Nav.Link>
                    </li>
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">Disclaimer</Nav.Link>
                    </li>
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">Copyright</Nav.Link>
                    </li>
                    <li className="menu-list-item w-100">
                        <Nav.Link href="#">Contact Us</Nav.Link>
                    </li>
                </ul>
                </div>
                </Col>
                <Col sm={12} md={3}>
                    <div className="social-links">
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Nav.Link href="https://www.facebook.com/pages/MyPatin/249818108402322">
                            <span className="social-icon"><FaFacebookF /></span>
                            </Nav.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Nav.Link href="https://twitter.com/myPAT_india">
                            <span className="social-icon"><FaTwitter /></span>
                        </Nav.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Nav.Link href="https://www.instagram.com/mypat_india/">
                        <span className="social-icon"><FaInstagram /></span>
                        </Nav.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Nav.Link href="https://www.linkedin.com/company/mypat---my-performance-
                            analysis-test?report%2Esuccess=KJ_KkFGTDCfMt-
                            A7wV3Fn9Yvgwr02Kd6AZHGx4bQCDiP6-2rfP2oxyVoEQiPrcAQ7Bf">
                        <span className="social-icon"><FaLinkedinIn /></span>
                        </Nav.Link>
                        </ListGroup.Item>
                    </ListGroup>
                    </div>
                    </Col>
                    </Row>
                </Container>
        </div>

        <div className="copyright">
            <Container fluid={true}>
                <Row>
                    <Col sm={12} md={12}>
                        <div>                            
                        © Copyright 2019-2020 Edfora. All Rights Reserved                    
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    </>
    )
};

export default Footer