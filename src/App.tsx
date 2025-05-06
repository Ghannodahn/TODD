import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {
  const [currentView, setCurrentView] = React.useState('home')

  return (
    <HashRouter basename="/TODD">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Content />
        </main>
      </div>
    </HashRouter>
  )
}
export default App
