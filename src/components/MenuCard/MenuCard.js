import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './MenuCard.css'
import AppModal from '../AppModal/AppModal'

function MenuCard(props) {
  const selectedAllergens = props.selectedAllergens
  const composite = props.menuItemAllergens.filter(
    (menuallergen) => menuallergen.item_id === props.card.item_id
  )
  const allergens = props.allergens.filter((allergen) =>
    composite.some(
      (menuallergen) => menuallergen.allergen_id === allergen.allergen_id
    )
  )
  console.log(props.card.factory_contam)
  const [show, setShow] = useState(false)

  const onCardClick = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const renderAllergen = allergens.map((d) => (
    <img
      className='allergen-img'
      src={d.allergen_image}
      alt='alergen icon'
    ></img>
  ))

  return (
    <div
      onClick={onCardClick}
      className={`menu-card ${
        allergens
          .map((allergen) => allergen.allergen_name)
          .filter((allergen) => selectedAllergens.includes(allergen)).length !==
        0
          ? 'allergy'
          : ''
      }`}
    >
      <Row>
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className='d-flex align-items-center justify-content-center'
        >
          <img className='card-image' src={props.card.image} alt='menu item' />
        </Col>
        <Col>
          <Row>
            <Col className='card-title'>{props.card.name}</Col>
          </Row>
          <Row>
            <Col className='card-footer'>{renderAllergen}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className='card-text'>{props.card.short_desc}</Col>
      </Row>
      <div
        className='clickinterceptor'
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
      >
        {show ? (
          <AppModal
            show={show}
            id={props.card.item_id}
            image={props.card.image}
            title={props.card.name}
            description={props.card.full_desc}
            ingredients={props.card.ingredients}
            allergen={renderAllergen}
            factory_contam={props.card.factory_contam}
            kitchen_contam={props.card.kitchen_contam}
            onClose={handleClose}
          >
            {' '}
            {console.log(show)}
          </AppModal>
        ) : null}
      </div>
    </div>
  )
}
export default MenuCard
