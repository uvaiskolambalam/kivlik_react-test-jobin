import React, { useRef, useState } from 'react'
import Logo from '../../Assets/logo.png'
import useOnClickOutside from '../ClickOutSide'
import './Navbar.css'

const Navbar = () => {
    const [navIcon, setNavIcon] = useState(false)
    const handleNavBar = () => {
        setNavIcon(!navIcon)
    }
    const menu = useRef(null)
    useOnClickOutside(menu, () => setNavIcon(false));
    return (
        <div className='Navbar'>
            <div className="Navbar_left">

                <img src={Logo} alt="" />

            </div>
            <div className="Navbar_center">
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="Navbar_right">
                <p>Login</p>
                <p>SignUp</p>

            </div>
            <div className='listIcon' onClick={handleNavBar} ref={menu}>
                {navIcon ? <i class="bi bi-x"></i> : <i class="bi bi-list listIcon"></i>}

            </div>
            {navIcon ?
                <div className="navBarList">
                    <ul>
                        <div className="navBarList_list">

                            <li>About Us</li>
                        </div>
                        <div className="navBarList_list">

                            <li>Services</li>
                        </div>
                        <div className="navBarList_list">

                            <li>Pricing</li>
                        </div>
                        <div className="navBarList_list">

                            <li>Contact</li>
                        </div>
                        <div className="navBarList_list">

                            <li>Login</li>
                        </div>
                        <div className="navBarList_list">

                            <li>Log Out</li>
                        </div>
                    </ul>
                   
                </div>
                : null}

        </div>
    )
}

export default Navbar