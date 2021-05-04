import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Slider from 'infinite-react-carousel'
import './AppModal.css'

function AppModal({
  menu,
  show,
  image,
  id,
  title,
  description,
  ingredients,
  allergen,
  factory_contam,
  kitchen_contam,
  onClose,
}) {
  const status = show
  const handleClose = () => onClose()
  const handleShow = () => show.setShow(true)
  ingredients = ingredients.split(',')

  return (
    <div>
      <Modal className='Modal' show={status} onClose={handleClose}>
        <Modal.Body>
          <img className='Modal-image' alt='menu item' src={image} />
          <Modal.Title className='title-font'>{title}</Modal.Title>
          <p className='modal-description text-font'>{description}</p>
          <p className='title-font'>Ingredients</p>
          <p className='Modal-ingredients text-font'>
            {ingredients.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </p>

          <div>
            <Slider className='modal-slider'>
              <div className='factory Contan'>
                <h6
                  className='title-font'
                  style={{ textAlign: 'center', color: '#EECA60' }}
                >
                  Factory Contamination
                </h6>
                <h6 className='text-font' style={{ textAlign: 'center' }}>
                  {factory_contam}
                </h6>
              </div>
              <div>
                <h6
                  className='title-font'
                  style={{ textAlign: 'center', color: '#EECA60' }}
                >
                  Kitchen Contamination
                </h6>
                <h6 className='text-font' style={{ textAlign: 'center' }}>
                  {kitchen_contam}
                </h6>
              </div>
            </Slider>
          </div>

          <p className='Modal-contamination text-font'></p>
          <div>{allergen}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default AppModal
