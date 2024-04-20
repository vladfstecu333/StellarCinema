import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import IntroPage from './pages/IntroPage'
import Evenimente from "./pages/Evenimente"
import Rezervare from './pages/Rezervare'
import BookOfRa from './pages/BookOfRa'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='events' element={<Evenimente />} />
        <Route path='events/book' element={<Rezervare />} />
        <Route path='bookofra' element={<BookOfRa />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
