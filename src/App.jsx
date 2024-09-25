import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Info from './Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Link to="/">Home</Link> {/* <br /> */}
        <Link to="/info">Info</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes> 
      
      </BrowserRouter>
    </>
  )
}

export default App
