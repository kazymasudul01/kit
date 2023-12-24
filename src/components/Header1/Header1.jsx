import { Button } from 'react-bootstrap';
import logo from '../../assets/logo4bgferee.png';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <Navbar expand="lg" className="navbar1" sticky="top" >
            <Container>
            <Link to="/" className='ms-auto'>
                    <img
                        src={logo}
                        alt="logo"
                        className="img-fluid" // Apply the 'img-fluid' class for responsive behavior
                        style={{ maxWidth: '150px',  }} // You can set a maximum width if needed
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
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
                       
                    <Button variant="warning">check more</Button>
                    

                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;