import React from 'react'
import Logo from '../images/logo.svg'
import instagram from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import '../css/footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="container footer-container">
            <div className="footer-logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="footer-links">
                <div>
                    <p>Features</p>
                    <ul>
                        <li><span className='link'>Link Shortening</span></li>
                        <li><span className='link'>Branded Links</span></li>
                        <li><span className='link'>Analytics</span></li>
                    </ul>
                </div>
                <div>
                    <p>Resources</p>
                    <ul>
                        <li><span className='link'>Blog</span></li>
                        <li><span className='link'>Developers</span></li>
                        <li><span className='link'>Support</span></li>
                    </ul>
                </div>
                <div>
                    <p>Company</p>
                    <ul>
                        <li><span className='link'>About</span></li>
                        <li><span className='link'>Our Team</span></li>
                        <li><span className='link'>Careers</span></li>
                        <li><span className='link'>Contact</span></li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <div><img src={facebook} alt="facebook"/></div>
                <div><img src={twitter} alt="twitter"/></div>
                <div><img src={pinterest} alt="pinterset"/></div>
                <div><img src={instagram} alt="instagram"/></div>
            </div>
            </div>
        </footer>
    )
}

export default Footer