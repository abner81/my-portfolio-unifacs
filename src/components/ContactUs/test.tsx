import { render, screen } from '@testing-library/react'

import ContactUs from '.'

describe('<ContactUs />', () => {
  it('should render the heading', () => {
    const { container } = render(<ContactUs />)

    expect(screen.getByRole('heading', { name: /ContactUs/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
