import React, { useContext } from 'react'
import headerImg from './assets/favi-removebg-preview.png'


function Header() {


  const RenderMenu = () => {

  }

  return (
    <div className="headerContainer">
      <div className="headerImage">
        <img className='headerlogo' src={headerImg} alt="MainLogo" />
      </div>
      <div className="Headerbtngroup">
        {/* <NavLink to='/login'><button className='Headerbtn Headerbtn1 btn'>Login</button></NavLink>
            <NavLink to='/register'><button className='Headerbtn Headerbtn2 btn'>Register</button></NavLink>
            <NavLink to='/logout'><button className='Headerbtn Headerbtn2 btn'>Logout</button></NavLink> */}
        <RenderMenu />
      </div>
    </div>
  )
}

export default Header