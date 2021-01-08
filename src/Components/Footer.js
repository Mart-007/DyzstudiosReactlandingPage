//This is the Footer
//Error: Fixed bottom

import React from 'react';
import '../Components/Footer.css';


 function Footer () {
return (

<footer className="fixed-bootom">
<div class="copyright">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 col-sm-3">
                        <span>Copyright © 2021, All Right Reserved Dyzstudios</span>
                    </div>
                   
                    <div className="col-md-6 col-sm-3">
                        <div className="copyright-menu  ">
                            <ul className="text-center ">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
           
        </div>
</footer>
)
 }

 export default Footer;