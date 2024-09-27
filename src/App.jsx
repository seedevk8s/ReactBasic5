import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Info from './Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        {/* <Link to="/">Home</Link> 
        <Link to="/info">Info</Link> */}

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes> 
      
      </BrowserRouter>
    </>
  )
}

export default App
