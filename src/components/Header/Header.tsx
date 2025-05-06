import React, { useState, useRef, useEffect } from 'react'

// Define the types for the props we expect
interface HeaderProps {
  setCurrentView: (view: string) => void
}

const Header: React.FC<HeaderProps> = ({ setCurrentView }) => {
  // Define common button styles for consistency
  const navButtonStyle = 'text-gray-700 hover:text-blue-600 cursor-pointer'

  // State to track if dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Ref for the dropdown menu to detect outside clicks
  const dropdownRef = useRef<HTMLLIElement>(null)

  // Handle clicking outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

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
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`${navButtonStyle} flex items-center`}
            >
              Prototypes
              <svg
                className={`ml-1 size-4 transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <button
                  onClick={() => {
                    setCurrentView('modely')
                    setIsDropdownOpen(false)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Modely
                </button>
                <button
                  onClick={() => {
                    setCurrentView('recipes')
                    setIsDropdownOpen(false)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Recipes
                </button>
              </div>
            )}
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
