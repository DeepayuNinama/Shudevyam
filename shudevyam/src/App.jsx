import { useState, useEffect } from 'react'
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

// Page Imports
import Home from "./pages/Home.jsx"; 
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Testimonials from './pages/Testimonials.jsx';

// Component Imports
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const activeLink = "flex h-full items-center border-t-4 border-[#800000] text-white";
const inactiveLink = "flex h-full items-center border-t-4 border-transparent text-zinc-400 hover:text-white hover:pt-2 transition-all duration-200";

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const logoSrc = isHomePage 
    ? "/images/shydevyamwhite.png" 
    : "/images/shydevyambrown.png";

  useEffect(() => {
    let path = location.pathname.toLowerCase();
    
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const pathToTitle = {
      '/': 'Home',
      '/gallery': 'Gallery',
      '/about': 'About',
      '/testimonials': 'Testimonials',
      '/contact': 'Contact',
    };

    const title = pathToTitle[path] || '404 Not Found';

    document.title = `${title}  •   Shudevyam`;
  }, [location]);



  return (
    <div className='no-scrollbar'> 
      <Navbar />
      <main> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      
      <div className='mt-40'>
        <Footer />
      </div>
      
    </div>
  )
}

export default App
