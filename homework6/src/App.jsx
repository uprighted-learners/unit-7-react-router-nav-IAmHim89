import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

import './App.css'

function App() {
  
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button>
              <Link to="/">Home</Link>
              </button>
            </li>

            <li>
            <button>
              <Link to="/about">About</Link>
            </button>
            </li>
            <li>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router> 
  )
}

export default App
