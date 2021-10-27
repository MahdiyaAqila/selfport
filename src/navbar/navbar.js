import React,{Component} from 'react';
import './navbar.css'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <div >
              <nav >
                    <h1 className="navbar-logo"><a href="/">MYLA</a></h1>
                    <div className='menu-icon' onClick={this.handleClick}>
                      <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
                    </div>
                  <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-links"><a href="/ui">User Interface Exploration</a></li>
                      <li  className="nav-links"><a href="/casestudy">Case Study</a></li>
                      <li  className="nav-links"><a href="/graphic">Graphic Design</a></li>
                  </ul>
              </nav>
            </div>
        );
    }
}

export default Navbar