import { render, screen } from '@testing-library/react'
import MenuCard from './MenuCard'

describe('MenuCard', () => {
  afterEach(() => jest.clearAllMocks())
  test(`Given the required props, when the MenuCard is rendered, 
       Title and description should be visable`, () => {
    const requiredProps = {
      key: 1001,
      index: 1001,
      card: {
        item_id: 1001,
        name: 'Halloumi Sticks & Dip',
        image: '/images/Halloumi Sticks & Dip.png',
        full_desc: 'Five chunky sticks of grilled halloumi with c',
        short_desc: 'Five chunky sticks of grilled halloumi with c',
        factory_contam: 'jdjvdfjobjvbjvjvjcvv',
        kitchen_contam: 'As bread is handled in the kitchen, please sp',
        ingredients: 'Halloumi cheese,flour,oil',
        submenu: 'Mains',
      },
      selectedAllergens: ['Gluten'],
      menuItemAllergens: [{ item_id: 1001, allergen_id: 1 }],
      allergens: [
        {
          allergen_id: '1',
          allergen_name: 'Gluten',
          allergen_image: '/images/image1a.png',
        },
      ],
    }
    render(<MenuCard {...requiredProps} />)
    expect(screen.getByText('Halloumi Sticks & Dip')).toBeInTheDocument()
    expect(
      screen.getByText('Five chunky sticks of grilled halloumi with c')
    ).toBeInTheDocument()
  })

  test(`Given the required props, when the MenuCard is rendered, 
    the image should be visable`, () => {
    const requiredProps = {
      key: 1001,
      index: 1001,
      card: {
        item_id: 1001,
        name: 'Halloumi Sticks & Dip',
        image: '/images/Halloumi Sticks & Dip.png',
        full_desc: 'Five chunky sticks of grilled halloumi with c',
        short_desc: 'Five chunky sticks of grilled halloumi with c',
        factory_contam: 'jdjvdfjobjvbjvjvjcvv',
        kitchen_contam: 'As bread is handled in the kitchen, please sp',
        ingredients: 'Halloumi cheese,flour,oil',
        submenu: 'Mains',
      },
      selectedAllergens: ['Gluten'],
      menuItemAllergens: [{ item_id: 1001, allergen_id: 1 }],
      allergens: [
        {
          allergen_id: '1',
          allergen_name: 'Gluten',
          allergen_image: '/images/image1a.png',
        },
      ],
    }
    render(<MenuCard {...requiredProps} />)
    expect(screen.getByAltText('menu item')).toBeInTheDocument()
  })
})
