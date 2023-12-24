import React from 'react';
import './Header.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (

        <Navbar expand="lg" className="navbar  py-3 ">
            <Container className="d-lg-flex justify-content-between align-items-center ">
            {/* Logo (always on the left) */}
            <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="img-fluid" // Apply the 'img-fluid' class for responsive behavior
                        style={{ maxWidth: '150px' }} // You can set a maximum width if needed
                    />
                </Link>

          {/* Navigation (hidden on small screens, shown on large screens) */}
            <div className="">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-0">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About The Firm</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/practice">
                                <Nav.Link>Practice Area</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            {/* Right Part (Phone Number) this side will comment */}
            {/* <div className="text-center ml-lg-auto">
                    <span className="d-none d-lg-inline">Phone: Your Phone Number</span>
                </div> */}
            {/* <div className="text-center ml-lg-auto">
          <span className=" d-lg-inline">Phone: Your Phone Number</span>
          <h2>another details</h2>
        </div> */}
            {/* <div className="text-center mt-lg d-none d-lg-block">
          <span>Phone: Your Phone Number</span>
        </div> */}
            {/* <div className="text-center  d-lg-block">
          <span>Phone: Your Phone Number</span>
        </div> */}
            {/* <Row className=" align-center ">
          <Col>
            <div className="text-center mt-2">
              <span>Phone: Your Phone Number</span>
            </div>
          </Col>
          <Col>
            <div className="text-center mt-2">
                <h2>Another Details</h2>
             
            </div>
          </Col>
        </Row> */}

            </Container>

            
        </Navbar>

            

    );
};

export default Header;
