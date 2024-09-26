import { render, screen } from '@testing-library/react'

import ServicesList from '.'

describe('<ServicesList />', () => {
  it('should render the heading', () => {
    const { container } = render(<ServicesList />)

    expect(screen.getByRole('heading', { name: /ServicesList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
