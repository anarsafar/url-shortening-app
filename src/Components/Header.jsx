import React,{Component} from 'react'
import Logo from '../images/logo.svg'
import '../css/header.css'

class Header extends Component {
    state={
        isActive:false
    }
    _handleToggle(){
        this.setState({
            isActive:!this.state.isActive
        })
    }    
    render(){
        const {isActive } = this.state
        return (
        <header className="container">
            <div className="left-header">
            <div><img src={Logo} alt="Logo"/></div>
            </div>
            <div className={isActive ? 'right-header visible' : 'right-header hidden'}>
            <nav>
                 <ul>
                     <li><span className='link'>Features</span></li>
                     <li><span className='link'>Pricing</span></li>
                     <li><span className='link'>Resources</span></li>
                 </ul>
             </nav>
             <div className="menu-line"></div>
            <div className="buttons">
                 <span className='link'>Login</span>
                 <button className="btn">Sign up</button>
             </div>
            </div>
            <div className={isActive ? 'change hamburger' : 'hamburger'} 
                 onClick={()=>this._handleToggle()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </header>
    )   
}
}

export default Header