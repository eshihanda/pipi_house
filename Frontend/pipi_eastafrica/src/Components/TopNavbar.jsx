import React from 'react'
import {Navbar, Nav, Container, Button, NavDropdown} from 'react-bootstrap';
import logo from '../assets/pip-logo.png';
import '../Styles/Navbar.css';
const TopNavbar = () => {
  return (
    <Navbar expand= 'lg' className="py-0"  style={{backgroundColor: '#e0f2c0ff'}} variant='light'>
      <Container>
        {/* Logo side */}
        <Navbar.Brand href='/'>
          <img src={logo} alt="Pipi Logo" style={{ height: '50px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls= 'main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='mx-auto'>
            <Nav.Link href='/' className='nav-link-custom'>Home</Nav.Link>
            <NavDropdown title='Our Products' id='products-dropdown' className='nav-link-custom custom-dropdown'>
              <NavDropdown.Item href='/products/cereals'>Cereals</NavDropdown.Item>
              <NavDropdown.Item href='/products/fruits'>Fruits</NavDropdown.Item>
              <NavDropdown.Item href='/products/legumes'>Legumes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/contact' className='nav-link-custom'>Contact</Nav.Link>
            <Nav.Link href='/about-us' className='nav-link-custom'>About Us</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>    
            <Button href='/products' className='px-3 py-2 fw-semibold' 
            style={{borderRadius: '10px', backgroundColor:'#DAA520', border: 'none', color: '#333', padding: '0px 20px', fontWeight: '200', fontSize: '1.1rem'}}>
              Our Products
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar