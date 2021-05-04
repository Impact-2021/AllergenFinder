import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer({ allergens, selectAllergen, selectedAllergens }) {
  return (
    <div className='div-footer'>
      <Navbar fixed='bottom' className='footer'>
        <Navbar.Brand className='footer-brand' href='#footer'>
          {allergens.map((allergen, index) => (
            <Row className='allergen-row' key={index}>
              <Col className='d-flex justify-content-center' xs={12}>
                <img
                  onClick={() => selectAllergen(allergen.allergen_name)}
                  key={allergen.allergen_id}
                  className={`allergen-icon ${
                    selectedAllergens.filter(
                      (a) => a === allergen.allergen_name
                    ).length !== 0
                      ? 'allergen-selected'
                      : ''
                  }`}
                  src={allergen.allergen_image}
                  alt={`${allergen.allergen_name} icon`}
                />
              </Col>
              <Col className='d-flex justify-content-center'>
                <h6 className='allergen-text'>{allergen.allergen_name}</h6>
              </Col>
            </Row>
          ))}
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}
export default Footer
