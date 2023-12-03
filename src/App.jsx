import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css'
import Login from './pages/login'
import About from './pages/about'
import Shop from './pages/shop'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Landing from './pages/landing'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/book' element={<Landing />} />
      </Routes>
      </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App
