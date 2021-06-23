import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return(
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='name' className='logo' />
          <button className='nav-toggle' onClick={()=>{setShowNav(!showNav)}}>
            <FaBars />
          </button>
        </div>

        <div className = {`${showNav?'links-container show-container':'links-container'}`}>
          <ul className='links'>
            {
              links.map((item)=>{
                const{id,url,text} = item;
                return(<a href={url} key={id}>{text}</a>)
              })
            }
          </ul>
          <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
            
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar
