import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ToddComponentViewer from '../../prototypes/Modely/Modely'
import TODDRecipeViewer from '../../prototypes/Recipes/todd-recipes'
import Home from 'components/Home/Home'

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/chat"
        element={
          <div className="p-4">
            <h1 className="mb-4 text-xl font-bold">Chat Interface</h1>
            <p>Chat functionality will be implemented here.</p>
          </div>
        }
      />
      <Route path="/modely" element={<ToddComponentViewer />} />
      <Route path="/recipes" element={<TODDRecipeViewer />} />

      <Route
        path="/results"
        element={
          <div className="p-4">
            <h1 className="mb-4 text-xl font-bold">Results</h1>
            <p>Results will be displayed here.</p>
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="p-4">
            <h1 className="mb-4 text-xl font-bold">Page Not Found</h1>
            <p>The requested view doesn't exist.</p>
          </div>
        }
      />
    </Routes>
  )
}

export default Content
