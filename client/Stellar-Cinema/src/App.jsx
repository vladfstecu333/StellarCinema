import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import IntroPage from './pages/IntroPage'
import Evenimente from "./pages/Evenimente"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='events' element={<Evenimente />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
