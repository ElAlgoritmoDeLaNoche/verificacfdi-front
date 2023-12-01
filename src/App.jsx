import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Default from './Pages/Default'
import Header from './Pages/Header'
import Footer from './Pages/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Default />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App