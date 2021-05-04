import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppModal from './AppModal'

describe('AppModal', () => {
  afterEach(() => jest.clearAllMocks())
  test(`Given the required props, when the AppModal is rendered, 
       Title and description should be visable`, () => {
    const requiredProps = {
      show: true,
      image: '/images/Halloumi Sticks & Dip.png',
      id: 1001,
      title: 'Halloumi Sticks & Dip',
      description: 'Five chunky sticks of grilled halloumi with c',
      ingredients: 'Halloumi cheese,flour,oil',
      allergen: [],
      factory_contam: 'jdjvdfjobjvbjvjvjcvv',
      kitchen_contam: 'As bread is handled in the kitchen, please sp',
      onClose: false,
    }
    render(<AppModal {...requiredProps} />)
    expect(screen.getByText('Halloumi Sticks & Dip')).toBeInTheDocument()
    expect(
      screen.getByText('Five chunky sticks of grilled halloumi with c')
    ).toBeInTheDocument()
    expect(
      screen.getByText('As bread is handled in the kitchen, please sp')
    ).toBeInTheDocument()
  })

  test(`Given the required props, the menu item image should be displayed`, () => {
    const requiredProps = {
      show: true,
      image: '/images/Halloumi Sticks & Dip.png',
      id: 1001,
      title: 'Halloumi Sticks & Dip',
      description: 'Five chunky sticks of grilled halloumi with c',
      ingredients: 'Halloumi cheese,flour,oil',
      allergen: [],
      factory_contam: 'jdjvdfjobjvbjvjvjcvv',
      kitchen_contam: 'As bread is handled in the kitchen, please sp',
      onClose: false,
    }
    render(<AppModal {...requiredProps} />)
    expect(screen.getByAltText('menu item')).toBeInTheDocument()
  })

  test(`Given the required props, when the close button is clicked the 
    pop up is hidden`, () => {
    const mockClosePopup = jest.fn()
    const requiredProps = {
      show: true,
      image: '/images/Halloumi Sticks & Dip.png',
      id: 1001,
      title: 'Halloumi Sticks & Dip',
      description: 'Five chunky sticks of grilled halloumi with c',
      ingredients: 'Halloumi cheese,flour,oil',
      allergen: [],
      factory_contam: 'jdjvdfjobjvbjvjvjcvv',
      kitchen_contam: 'As bread is handled in the kitchen, please sp',
      onClose: mockClosePopup,
    }
    render(<AppModal {...requiredProps} />)
    const clickClose = screen.getByRole('button', { name: /Close/i })
    userEvent.click(clickClose)
    expect(mockClosePopup).toHaveBeenCalled()
  })
})
