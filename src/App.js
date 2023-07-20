import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (<>


    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path='/navbar' element={<Navbar />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App