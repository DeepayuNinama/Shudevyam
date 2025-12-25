import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

// Page Imports
import Home from './pages/home.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Footer from './pages/Footer.jsx';


// Component Imports
import Navbar from './components/Navbar.jsx';


function App() {
  const [count, setCount] = useState(0)


  const location = useLocation();
  useEffect(() => {
    const pathToTitle = {
      '/': 'Home',
      '/gallery': 'Gallery',
      '/about': 'About',
      '/contact': 'Contact',
    };
    const title = pathToTitle[location.pathname] || '404 Not Found';

    document.title = `${title}  •   Shudevyam`;
  }, [location.pathname]);



  return (
    <div className='no-scrollbar'> 
      <Navbar />
      <main className='-mt-8'> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
