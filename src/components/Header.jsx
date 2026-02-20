import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import siteConfig from '../data/siteConfig';
import { getWhatsAppLink } from '../utils/whatsapp';
import whatsappIcon from '../assets/whatsapp.webp';
import logo from "../assets/logo1.webp"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='offer-bar'>
        🎉 Limited Time Offer: Get <strong>10% OFF</strong> on your first
        service
      </div>

      <header className='header header-flex'>
        <div className='logo'>
          <img src={logo} loading='lazy'/>
          <h2>Ananya Home Services</h2>
        </div>

        <nav className={`nav-center ${menuOpen ? 'open' : ''}`}>
          <NavLink to='/' onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to='/about' onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to='/services' onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        <div className='header-right'>
          <span className='phone'>📞 {siteConfig.phone}</span>
          <NavLink to='/contact' className='header-btn'>
            Book Now
          </NavLink>

          <div
            className={`burger ${menuOpen ? 'toggle' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      <a
        href={getWhatsAppLink(siteConfig.phone)}
        className='whatsapp-btn'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
      >
        <img
          src={whatsappIcon}
          alt='WhatsApp'
          className='whatsapp-icon'
          loading='lazy'
        />
      </a>
    </>
  );
}

export default Header;
