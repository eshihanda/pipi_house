import React from 'react'
import {Navbar, Nav, Container, Button, NavDropdown} from 'react-bootstrap';
import '../Styles/Navbar.css';
const TopNavbar = () => {
  return (
    <Navbar expand= 'lg' style={{backgroundColor: '#556B2F'}} variant='dark'>
      <Container>
        {/* Logo side */}
        <Navbar.Brand href='/'>Pipi</Navbar.Brand>
        <Navbar.Toggle aria-controls= 'main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='mx-auto'>
            <Nav.Link href='/' className='nav-link-custom'>Home</Nav.Link>
            <NavDropdown title='Our Products' id='products-dropdown' className='nav-link-custom custom-dropdown'>
              <NavDropdown.Item href='/serials'>Serials</NavDropdown.Item>
              <NavDropdown.Item href='/fruits'>Fruits</NavDropdown.Item>
              <NavDropdown.Item href='/nuts'>Nuts</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/' className='nav-link-custom'>Contact</Nav.Link>
            <Nav.Link href='/about' className='nav-link-custom'>About Us</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Button href='our-products' className='px-3 py-2 fw-semibold' 
            style={{borderRadius: '20px', backgroundColor:'#DAA520', border: 'none', color: '#333'}}>
              Shop Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar