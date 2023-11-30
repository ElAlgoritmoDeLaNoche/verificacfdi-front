import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Pages/Admin'
import Default from './Pages/Default'
import Header from './Pages/Header'
import Footer from './Pages/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
