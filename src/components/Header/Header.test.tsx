import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'

describe('Header Component', () => {
  it('should render the header component without crashing', () => {
    render(<Header />)
    const headerElement = screen.getByRole('banner') // The <header> tag has an implicit role of 'banner'
    expect(headerElement).toBeInTheDocument()
  })

  it('should display the title "TODD Explorer"', () => {
    render(<Header />)
    // Find the element containing the title text
    const titleElement = screen.getByText('TODD Explorer')
    expect(titleElement).toBeInTheDocument()
    // Optionally check if it has the expected styling classes
    expect(titleElement).toHaveClass('text-xl font-bold')
  })

  it('should display all navigation links', () => {
    render(<Header />)
    // Check for each navigation link by its text content using accessible role 'link'
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /chat/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /model/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /results/i })).toBeInTheDocument()
  })

  it('should have placeholder href attributes for navigation links', () => {
    render(<Header />)
    // Verify the href attribute for each link
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /chat/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /model/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /results/i })).toBeInTheDocument()
    // Note: If these links become functional (e.g., using React Router), update these tests accordingly.
  })
})
