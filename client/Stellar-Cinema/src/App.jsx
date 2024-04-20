import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import IntroPage from './pages/IntroPage'
import Evenimente from "./pages/Evenimente"
import Rezervare from './pages/Rezervare'
import PaginaCheckout from './pages/PaginaCheckout'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='events' element={<Evenimente />} />
        <Route path='events/book' element={<Rezervare />} />
        <Route path='/succes' element={<PaginaCheckout />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
