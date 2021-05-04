import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarMenu from './components/NavbarMenu/NavbarMenu'
import LogoTitle from './components/LogoTitle/LogoTitle'
import Footer from './components/Footer/Footer'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import MenuList from './components/MenuList/MenuList'
import './App.css'
import axios from 'axios'

function App() {
  const [restaurants, setRestaurant] = useState([])
  const [cardInfo, setCardInfo] = useState([])
  const [allergens, setAllergens] = useState([])
  const [menuItemAllergens, setMenuItemAllergens] = useState([])

  const [selectedAllergens, setSeletedAllergens] = useState([])
  const [selectedMenu, setSelectedMenu] = useState(cardInfo)

  const [selectedRestaurant, setSelectedRestaurant] = useState('')
  const [selectedMenuCategory, setSelectedMenuCategory] = useState('')
  const selectRestaurant = (id) => {
    setSelectedRestaurant(id)
    setSelectedMenuCategory('')
  }
  const selectSubMenu = (sub) => {
    setSelectedMenuCategory(sub)
  }

  useEffect(() => {
    axios
      .get(
        'https://u6mq1fk1jg.execute-api.eu-west-2.amazonaws.com/dev/restaurants'
      )
      .then((response) => setRestaurant(response.data))
      .catch((error) => console.log(error))

    axios
      .get(
        'https://u6mq1fk1jg.execute-api.eu-west-2.amazonaws.com/dev/menuitems'
      )
      .then((response) => setCardInfo(response.data))
      .catch((error) => console.log(error))

    axios
      .get(
        'https://u6mq1fk1jg.execute-api.eu-west-2.amazonaws.com/dev/allergens'
      )
      .then((response) => setAllergens(response.data))
      .catch((error) => console.log(error))

    axios
      .get(
        'https://u6mq1fk1jg.execute-api.eu-west-2.amazonaws.com/dev/menuallergens'
      )
      .then((response) => setMenuItemAllergens(response.data))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    let selectedMenu = cardInfo

    if (selectedRestaurant !== '') {
      selectedMenu = selectedMenu.filter(
        (card) => card.rest_id === selectedRestaurant
      )
    }
    if (selectedMenuCategory !== '' || undefined) {
      selectedMenu = selectedMenu.filter(
        (card) => card.sub_menu === selectedMenuCategory
      )
    }
    setSelectedMenu(selectedMenu)
  }, [selectedRestaurant, cardInfo, selectedMenuCategory])

  const selectAllergen = (allergen) => {
    setSeletedAllergens((selectedAllergens) =>
      selectedAllergens.indexOf(allergen) === -1
        ? [...selectedAllergens, allergen]
        : selectedAllergens.filter(
            (_, i) => i !== selectedAllergens.indexOf(allergen)
          )
    )
  }

  return (
    <section id='app'>
      <div className='container-fluid'>
        <Row>
          <LogoTitle
            restaurants={restaurants}
            selectRestaurant={selectRestaurant}
            selectedRestaurant={selectedRestaurant}
          />
        </Row>
        <Row>
          <NavbarMenu selectSubMenu={selectSubMenu} />
        </Row>
        <Row>
          <Col>
            <Container className='menu-container'>
              <MenuList
                menuItemAllergens={menuItemAllergens}
                allergens={allergens}
                selectedMenu={selectedMenu}
                selectedAllergens={selectedAllergens}
              />
            </Container>
          </Col>
        </Row>
        <Row>
          <Footer
            allergens={allergens}
            selectAllergen={selectAllergen}
            selectedAllergens={selectedAllergens}
          />
        </Row>
      </div>
    </section>
  )
}
export default App
