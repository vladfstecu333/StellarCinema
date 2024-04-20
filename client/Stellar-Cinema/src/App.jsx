import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Evenimente from "./pages/Evenimente"

function App() {
  return (
    <>
      <Evenimente />
    </>
  )
}

export default App
