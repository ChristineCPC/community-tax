import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path = '/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
