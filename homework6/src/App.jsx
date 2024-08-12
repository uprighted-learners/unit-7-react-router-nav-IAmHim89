import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-dom"
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
