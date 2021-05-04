import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavbarMenu.css'

function NavbarMenu({ selectSubMenu }) {
  return (
    <div>
      <Navbar collapseOnSelect className='menu' expand='md' fixed='top'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='navbar-collapse'>
          <Nav className='mr-auto'>
            <Nav.Link
              onClick={() => selectSubMenu('Starters')}
              className='menu-item'
              href='#starters'
            >
              Starters
            </Nav.Link>
            <Nav.Link
              onClick={() => selectSubMenu('Mains')}
              className='menu-item'
              href='#mains'
            >
              Mains
            </Nav.Link>
            <Nav.Link
              onClick={() => selectSubMenu('Sides')}
              className='menu-item'
              href='#sides'
            >
              Sides
            </Nav.Link>
            <Nav.Link
              onClick={() => selectSubMenu('Extras')}
              className='menu-item'
              href='#extras'
            >
              Extras
            </Nav.Link>
            <Nav.Link
              onClick={() => selectSubMenu('Desserts')}
              className='menu-item'
              href='#desserts'
            >
              Desserts
            </Nav.Link>
            <Nav.Link
              onClick={() => selectSubMenu('Drinks')}
              className='menu-item'
              href='#drinks'
            >
              Drinks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavbarMenu
