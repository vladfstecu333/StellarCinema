import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import IntroPage from './pages/IntroPage'
import Evenimente from "./pages/Evenimente"
import Rezervare from './pages/Rezervare'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='events' element={<Evenimente />} />
        <Route path='book' element={<Rezervare />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
