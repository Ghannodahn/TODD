import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      <div className="text-xl font-bold">TODD Explorer</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Chat
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Model
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Results
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
