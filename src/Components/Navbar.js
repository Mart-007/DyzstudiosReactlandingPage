//This is the Navbar
//Error: Toggle back Menu btn | navLinks | Adjust

import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.PNG';
import './Navbar.css';




function Navbar() {
    return (
<>
           
<div>
<div data-spy="scroll" data-target=".navbar" data-offset="0" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
            <div className="container">
                <a className="navbar-brand" href="Home"><img src={Logo} alt="logo" className="img-fluid"  /> </a>
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#collapsNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div id="collapsNavbar" className="collapse navbar-collapse" >
                            <ul className="navbar-nav ml-auto">
                                <Link  to="/home">
                                <li class="nav-item active">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                </Link>
                                <Link  to="/products">
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">Products</a>
                                </li>
                                </Link>
                                <Link  to="/stacks">
                                <li className="nav-item">
                                    <a className="nav-link" href="#stacks">Stacks</a>
                                </li>
                                </Link>
                                <Link  to="/testimonials">
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonials">Testimonials</a>
                                </li>
                                </Link>
                                
                            </ul>
                        </div>
                     </div>
                    </nav>
                    </div>
                </div>

  </>

 
    );
}

export default Navbar;