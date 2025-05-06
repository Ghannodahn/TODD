import React from 'react'
import ToddComponentViewer from '../../prototypes/Modely/Modely'
import TODDRecipeViewer from '../../prototypes/Recipes/todd-recipes'
import Home from 'components/Home/Home'

// Define props type
interface ContentProps {
  currentView: string
}

const Content: React.FC<ContentProps> = ({ currentView }) => {
  // Render different components based on currentView value
  switch (currentView) {
    case 'home':
      return <Home />
    case 'chat':
      return (
        <div className="p-4">
          <h1 className="mb-4 text-xl font-bold">Chat Interface</h1>
          <p>Chat functionality will be implemented here.</p>
        </div>
      )
    case 'modely':
      return <ToddComponentViewer />
    case 'recipes':
      return <TODDRecipeViewer />
    case 'results':
      return (
        <div className="p-4">
          <h1 className="mb-4 text-xl font-bold">Results</h1>
          <p>Results will be displayed here.</p>
        </div>
      )
    default:
      return (
        <div className="p-4">
          <h1 className="mb-4 text-xl font-bold">Page Not Found</h1>
          <p>The requested view doesn&apos;t exist.</p>
        </div>
      )
  }
}

export default Content
