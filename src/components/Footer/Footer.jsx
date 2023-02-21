import React from 'react'
import './Footer.css'
import Logo from '../../Assets/logo color.png'
import AppleStore from '../../Assets/app store.png'
import googlePlay from '../../Assets/google play.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_top">
                <div className="footer_top_left">
                    <div >
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <p>KIVLIK is a mobile steam car wash company, which offers premium car wash and detailing services at your doorstep. Conveniently book a car wash with a few taps on your phone.
                            KIVLIK has several packages to meet your budget and requirements. Conveniently book a carwash with a few taps using the KIVLIK App or website. You can pick a time, location and package from the App or web. KIVLIK washes each vehicle using our Steam Cleaning system.</p>
                    </div>
                </div>
                
                <div className="footer_top_center">
                    <p>COMPANY</p>
                    <ul>
                        <li>Who We Are</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Report Fraud</li>
                        <li>Contact</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div className="footer_top_right">
                    <div className="footer_top_right_one">
                        <p>Got Questions?</p>
                        <p>Help Center</p>
                    </div>
                    <div className="footer_top_right_two">
                        <div>
                            <p>FOLLOW US</p>
                        </div>
                        <div className='footer_icons'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-youtube"></i>
                        </div>
                        {/* <div className='footer_plyaStore_icons'>
                            <img src={AppleStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_left"><p>©2021 Kivlik. All rights reserved.</p></div>
                <div className="footer_bottom_right"> Privacy  | Terms  | Security | Sitemap</div>
            </div>


        </div>
    )
}

export default Footer