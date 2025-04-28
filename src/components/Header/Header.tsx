import React from 'react'

// Define the types for the props we expect
interface HeaderProps {
  setCurrentView: (view: string) => void
}

const Header: React.FC<HeaderProps> = ({ setCurrentView }) => {
  // Define common button styles for consistency
  const navButtonStyle = 'text-gray-700 hover:text-blue-600 cursor-pointer'

  return (
    <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      <div className="text-xl font-bold">TODD Explorer</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            {/* Use button and onClick to set the view */}
            <button
              onClick={() => setCurrentView('home')}
              className={navButtonStyle}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView('chat')}
              className={navButtonStyle}
            >
              Chat
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView('model')}
              className={navButtonStyle}
            >
              Model
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView('results')}
              className={navButtonStyle}
            >
              Results
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
