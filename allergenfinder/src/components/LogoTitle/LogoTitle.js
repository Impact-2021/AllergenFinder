
import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import "./LogoTitle.css";

function LogoTitle({restaurants, selectRestaurant, selectedRestaurant}) {
let y = ""
  const x = restaurants.filter(restaurant => restaurant.rest_id === selectedRestaurant).map(a => a.rest_name);
  console.log('name ' + (x))
  
  return (
    <div>
      <Navbar className="logo-nav-bar" collapseOnSelect expand="lg" fixed="top" >
        <Navbar.Brand className='nav-font'>
          <img className="header-logo" alt="logo" src="/images/crab.png" />{' '}Allergen Finder</Navbar.Brand>
        <Form inline className="ml-auto"  >
          <NavDropdown title={`${ selectedRestaurant === "" ? 'Restaurant Name' : restaurants.filter(restaurant => 
                                restaurant.rest_id === selectedRestaurant).map(a => a.rest_name)}`} 
                                id="dropdown-title" className="rest-dropdown">
          {restaurants.map(restaurant => <NavDropdown.Item  className="rest-name" 
          onClick={()=>selectRestaurant(restaurant.rest_id)  } // NavDropdown.title = restaurant.name
          key={restaurant.rest_id} 
          href="#action/3.3">{restaurant.rest_name}
          </NavDropdown.Item>)}

          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  )
}
export default LogoTitle;
 /**
  * 
  * onClick={()=>refreshMenu()}
  */
