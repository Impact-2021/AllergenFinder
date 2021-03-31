import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import "./LogoTitle.css";

function LogoTitle({restaurants}) {

  
  return (
    <div>
      <Navbar className="nav-bar" collapseOnSelect expand="lg" fixed="top" >
        <Navbar.Brand className='navfont'>
          <img alt="logo" src="/images/crab.png" />{' '}Allergen Finder</Navbar.Brand>
        <Form inline className="ml-auto"  >
          <NavDropdown title="Restaurant Name" id="dropdown-title" className="dropdown" >
          {restaurants.map(rest => <NavDropdown.Item key={rest.restId} className="menu-item" href="#action/3.3">{rest.restName}({rest.branchName})</NavDropdown.Item>)}
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  )
}
export default LogoTitle;
