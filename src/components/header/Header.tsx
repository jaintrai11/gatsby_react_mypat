import React, { useState } from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, ListGroup } from 'react-bootstrap'
import HeaderBanner from "./headerBanner"
import './header.css'
import SideNav from "./sideNav"

interface Props {
  siteTitle?: string
}



const Header: React.FC<Props> = ({ siteTitle }) => {
  const [showSidenav, setSidenav] = useState(false); 

  return (
  <>  
  <section className="header-container">
    <Container>    
      <div className={showSidenav ? 'side-nav-overlay' : ''} 
      onClick={e => setSidenav(!showSidenav)}>        
      </div>

      {showSidenav && <SideNav /> }

    <Navbar expand="xl">    
      <Navbar.Brand href="#home"> 
          <Navbar.Toggle onClick={e => setSidenav(!showSidenav)}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>      
          </Navbar.Toggle>
          <img src="https://mypat.in/assets/img/s3-images/logo-mypat2.png" width="90" alt="logo" />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="mr-auto ml-xs header-nav">
          <Nav.Link bsPrefix="header-link" href="#course">Courses</Nav.Link>          
          <NavDropdown bsPrefix="header-link" title="MyExams" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">JEE Main</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">JEE Advanced</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">BITSAT</NavDropdown.Item>
            <NavDropdown.Item href="#action">NTSE</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">KVPY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown bsPrefix="header-link" title="Resources" id="basic-nav-dropdown">
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
          <Nav.Link bsPrefix="header-link" href="#community">Community</Nav.Link>
          <Nav.Link bsPrefix="header-link" href="#refer">Refer & Earn</Nav.Link>
        </Nav>       
      </Navbar.Collapse>

      <Form inline>
          <Button variant="primary" bsPrefix="login">
            Login
          </Button>
          <Button variant="outline-primary" bsPrefix="signup">
            Sign Up
          </Button>
        </Form>
    </Navbar>
    </Container>
    </section>

  </>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
