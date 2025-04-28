import React, { useState } from 'react'
import Header from './Header/Header'
import Content from './Content/Content' // Import the new Content component

function App() {
  // State to track the current view, default to 'home'
  const [currentView, setCurrentView] = useState<string>('home')

  return (
    <div className="app">
      {/* Pass the state setter function to Header */}
      <Header setCurrentView={setCurrentView} />
      {/* Pass the current view state to Content */}
      <div className="content">
        <Content currentView={currentView} />
      </div>
    </div>
  )
}

export default App
