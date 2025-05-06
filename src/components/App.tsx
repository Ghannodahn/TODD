import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header/Header'
import Content from './Content/Content'

function App() {
  // Set the basename to '/TODD' for GitHub Pages project deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/TODD' : ''

  return (
    <BrowserRouter basename={basePath}>
      <div className="app">
        <Header />
        <div className="content">
          <Content />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
