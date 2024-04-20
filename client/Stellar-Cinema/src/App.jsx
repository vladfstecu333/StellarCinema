import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle"
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" type="button">Dropdown item</button></li>
          <li><button className="dropdown-item" type="button">Dropdown item</button></li>
          <li><button className="dropdown-item" type="button">Dropdown item</button></li>
        </ul>
      </div>
    </>
  )
}

export default App
