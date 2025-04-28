import React from 'react'
import Home from '../Home/Home'
import ToddComponentViewer from '../Modely/Modely' // Assuming Modely.tsx exports ToddComponentViewer

// Define the props interface
interface ContentProps {
  currentView: string
}

const Content: React.FC<ContentProps> = ({ currentView }) => {
  // Conditionally render components based on the currentView prop
  switch (currentView) {
    case 'home':
      return <Home />
    case 'model':
      return <ToddComponentViewer />
    case 'chat':
      // Placeholder for Chat component
      return <div>Chat Component Placeholder - Coming Soon!</div>
    case 'results':
      // Placeholder for Results component
      return <div>Results Component Placeholder</div>
    default:
      // Default to Home if the view is unknown
      return <Home />
  }
}

export default Content
