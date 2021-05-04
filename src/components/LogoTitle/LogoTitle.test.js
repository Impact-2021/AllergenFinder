import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LogoTitle from './LogoTitle'

describe('LogoTitle', () => {
  test(`Given the required props, when the LogoTitle is rendered, 
        the names of the restaurant should be listed`, () => {
    const requiredProps = {
      restaurants: [
        { rest_id: '001', rest_name: 'Nandos', rest_branch: 'London, Wembley' },
        { rest_id: '002', rest_name: 'Bills', rest_branch: 'Swindon' },
      ],
      selectRestaurant: () => {},
      selectedRestaurant: ['001'],
    }
    render(<LogoTitle {...requiredProps} />)
    const dropdown = screen.getByRole('button')
    userEvent.click(dropdown)

    expect(screen.getByText('Nandos (London, Wembley)')).toBeInTheDocument()
    expect(screen.getByText('Bills (Swindon)')).toBeInTheDocument()
  })

  test(`Given the required props, when the dropdown menu is clicked, 
        2 restaurants should be listed`, () => {
    const requiredProps = {
      restaurants: [
        { rest_id: '001', rest_name: 'Nandos', rest_branch: 'London, Wembley' },
        { rest_id: '002', rest_name: 'Bills', rest_branch: 'Swindon' },
      ],
      selectRestaurant: () => {},
      selectedRestaurant: ['001'],
    }
    render(<LogoTitle {...requiredProps} />)
    const dropdown = screen.getByRole('button')
    userEvent.click(dropdown)

    const menuOptions = screen.getAllByRole('link')
    expect(menuOptions).toHaveLength(2)
  })
})
