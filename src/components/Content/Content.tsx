import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ToddComponentViewer from '../../prototypes/Modely/Modely'
import TODDRecipeViewer from '../../prototypes/Recipes/todd-recipes'
import PromptyHomepage from '../../prototypes/Prompty/prompty-home'
import Home from 'components/Home/Home'
import ArtyExample from 'prototypes/Arty/arty-example'

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/modely" element={<ToddComponentViewer />} />
      <Route path="/recipes" element={<TODDRecipeViewer />} />
      <Route path="/prompty" element={<PromptyHomepage />} />
      <Route path="/arty" element={<ArtyExample />} />

      <Route
        path="/*"
        element={
          <div className="p-4">
            <h1 className="mb-4 text-xl font-bold">Page Not Found</h1>
            <p>The requested view doesn&apos;t exist.</p>
          </div>
        }
      />
    </Routes>
  )
}

export default Content
