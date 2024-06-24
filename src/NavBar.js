import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Discover from './Discover'
import './style.css'
import Booking from './Booking'
export default function NavBar() {
  const backgroundStyle = {
     backgroundImage: "url('/images/bgimg.jpg')",
     backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px'
  };
  return (
    <div style={backgroundStyle}>
       <br/>
        <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/discover'>Discover</Link>
        <Link to='/contact'>Contact</Link>
        </nav>
        <h3 align='center'>Welcome to SathyaTravels</h3>
<Routes>
    <Route path='/home' element={<Home/>} exact/>
    <Route path='/contact' element={<Contact/>} exact/>
    <Route path='/about' element={<About/>} exact/>
    <Route path='/discover' element={<Discover/>} exact/>
    <Route path='/booking' element={<Booking/>} exact/>
</Routes>
    </div>
  )
}
