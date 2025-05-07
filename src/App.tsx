import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {
  // Only use basename in production
  const basename = import.meta.env.PROD ? '/TODD' : '/'

  return (
    <BrowserRouter basename={basename}>
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
