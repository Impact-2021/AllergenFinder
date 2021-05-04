/* eslint-disable jest/valid-title */
/* eslint-disable no-restricted-globals */
import NavbarMenu from './NavbarMenu'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

describe('NavbarMenu component', () => {
  test(`
        Once click in one of the submenu options ,
        The submenu shoud be present`, () => {
    const mockFunction = jest.fn()
    const getProps = {
      selectSubMenu: mockFunction,
      //selectSubMenu: () => {}
    }

    render(<NavbarMenu {...getProps} />)

    const clickMenu = screen.getByText('Starters')
    userEvent.click(clickMenu)

    expect(mockFunction).toHaveBeenCalledWith('Starters')
    expect(screen.getByText('Mains')).toBeInTheDocument()
    expect(screen.getByText('Sides')).toBeInTheDocument()
    expect(screen.getByText('Extras')).toBeInTheDocument()
    expect(screen.getByText('Desserts')).toBeInTheDocument()
    expect(screen.getByText('Drinks')).toBeInTheDocument()
  })
})
