import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <div className='card'>
    <Header />
    <About />
    <Footer />
  </div>
)
