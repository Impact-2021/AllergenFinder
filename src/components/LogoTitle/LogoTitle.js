import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import './LogoTitle.css'

function LogoTitle({ restaurants, selectRestaurant, selectedRestaurant }) {
  const reloadPage = () => {
    window.location.reload()
  }
  return (
    <div>
      <Navbar className='logo-nav-bar' collapseOnSelect expand='lg' fixed='top'>
        <Navbar.Brand className='nav-font' onClick={() => reloadPage()}>
          <img className='header-logo' alt='logo' src='/images/crab.png' />{' '}
          Allergen Finder
        </Navbar.Brand>
        <Form inline className='ml-auto'>
          <NavDropdown
            title={`${
              selectedRestaurant === ''
                ? 'Restaurant Name'
                : restaurants
                    .filter(
                      (restaurant) => restaurant.rest_id === selectedRestaurant
                    )
                    .map((a) => a.rest_name + ' (' + a.rest_branch + ')')
            }`}
            id='dropdown-title'
            className='rest-dropdown'
          >
            {restaurants.map((restaurant) => (
              <NavDropdown.Item
                className='rest-name'
                onClick={() => selectRestaurant(restaurant.rest_id)}
                key={restaurant.rest_id}
                href='#action/3.3'
              >
                {restaurant.rest_name} ({restaurant.rest_branch})
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  )
}
export default LogoTitle
