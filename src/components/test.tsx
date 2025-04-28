import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(screen.getByText(/TODD Explorer/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Chat' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Model' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Results' })).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
