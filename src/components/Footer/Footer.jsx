

import React from 'react';
import { FaMailchimp, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-slate-400 p-5 text-base-content">
        <aside className=''>
        <div class="flex items-center text-center">
    <img src='https://i.ibb.co/HhwsrD5/logo.png'></img>
    
    
</div>
<div className=''>
<p className='font-mono text-black '>Hydrabad Technology Ltd. is the largest ICT products based E-comerec company in Hydrabad. It’s dealing with Laptop, telecom, Television in Hydrabad. Hydrabad Technology Ltd is the authorized distributor of more than 100 renowned international ICT Brands.</p>
</div>

          
        </aside> 
        <nav className='mx-8'>
          <header className="footer-title text-2xl text-black font-bold">Brand</header> 
                
                 <Link to=""><a className="link link-hover text-black">Apple</a></Link> 
                 <Link to=""><a className="link link-hover text-black">Samsumg</a></Link>
                 <Link to=""><a className="link link-hover text-black">Sony</a></Link>
                 <Link to=""><a className="link link-hover text-black">Google</a></Link>
        </nav> 
        <nav className='mx-8'>
          <header className="footer-title text-2xl text-black font-bold text-black">Company</header> 
          <Link to="about"><a className="link link-hover text-black">About us</a></Link>
          <Link to="/contact"><a className="link link-hover text-black">Contact</a></Link>
          <Link to="/faq"><a className="link link-hover text-black">Faq</a></Link>
          <Link to="/portfolio"><a className="link link-hover text-black">Portfolio</a></Link>
        </nav> 
        <aside className='mx-8 text-black font-bold'>
  <header className="footer-title text-2xl">Contact Us</header>

  <div className="flex items-center">
    <FaMapMarkerAlt size={20} className="mr-2" />
    <p className=''>Gowdavelly (Village), Near Kompally,<br/> Medchal (Mandal), Medchal-Malkajgiri<br/>501401. Telangana. India.</p>
  </div>

  <div className="flex items-center">
    <FaMobileAlt size={20} className="mr-2" />
    <p className='mt-1'>+9247001102</p>
  </div>

  <div className="flex items-center">
    <FaMailchimp size={20} className="mr-2" />
    <p className='mt-1'>info@website.com</p>
  </div>
</aside>

      </footer>
      
    );
};

export default Footer;