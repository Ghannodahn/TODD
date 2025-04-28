import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TODDHomepage from './Home' // Adjust the import path if necessary

// Mock lucide-react icons to simplify testing
vi.mock('lucide-react', () => ({
  Brain: () => <svg data-testid="brain-icon" />,
  Zap: () => <svg data-testid="zap-icon" />,
  GitMerge: () => <svg data-testid="gitmerge-icon" />,
  ArrowRightCircle: () => <svg data-testid="arrow-icon" />
}))

describe('TODDHomepage Component', () => {
  it('renders the main heading', () => {
    render(<TODDHomepage />)
    expect(
      screen.getByRole('heading', { level: 1, name: /TODD/i })
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<TODDHomepage />)
    expect(
      screen.getByText(/Tool-Orchestrated Development & Diagnostics/i)
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<TODDHomepage />)
    expect(
      screen.getByText(
        /A self-evolving system that tests, compares, and improves AI solutions through intelligent agent collaboration./i
      )
    ).toBeInTheDocument()
  })

  it('renders all three feature cards with titles and descriptions', () => {
    render(<TODDHomepage />)

    // Check for Arena card
    expect(screen.getByText('Arena')).toBeInTheDocument()
    expect(
      screen.getByText('Compare AI solutions across defined challenges')
    ).toBeInTheDocument()
    expect(screen.getByTestId('brain-icon')).toBeInTheDocument()

    // Check for Results card
    expect(screen.getByText('Results')).toBeInTheDocument()
    expect(
      screen.getByText('Autonomously improve performance and accuracy')
    ).toBeInTheDocument()
    expect(screen.getByTestId('zap-icon')).toBeInTheDocument()

    // Check for Evolve card
    expect(screen.getByText('Evolve')).toBeInTheDocument()
    expect(
      screen.getByText('Self-learning architecture that grows with use')
    ).toBeInTheDocument()
    expect(screen.getByTestId('gitmerge-icon')).toBeInTheDocument()
  })

  it('renders the "Explore Architecture" button', () => {
    render(<TODDHomepage />)
    const button = screen.getByRole('button', {
      name: /Explore Architecture/i
    })
    expect(button).toBeInTheDocument()
    // Check if the arrow icon is within the button (or rendered)
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument()
  })
})
