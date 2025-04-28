import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(screen.getByText(/TODD Explorer/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Chat/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Model/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Results/i })).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
