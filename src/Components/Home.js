//This is the Home
//Error: Put autoSlide image | Fix Footer | navLinks

import React from 'react';
import '../Components/Home.css';
import img from '../images/undraw_Online_collaboration_re_bkpm.svg';
import img1 from '../images/undraw_amusement_park_17oe.svg';

import imgSmall from '../images/small-eclipse.svg';
import imgMedium from '../images/mid-eclipse.svg';
import imgBig from '../images/big-eclipse.svg';
import isDotF from '../images/dot-full.svg';
import isDot from '../images/dot.svg'
import isLeft from '../images/arrow-left.svg';
import isRight from '../images/arrow-right.svg'

 function Home() {
    return (
<>
    <main>
        <section className="presentation">
            <div className="introduction">
            <div className="cover1">
                <img src={img1} alt="Image" />
            </div>
                <div className="intro-text">
                    <h1>The Best Solution for Your Business.</h1>
                     <p>Helps you create the best possible product. </p>
                </div>
                    <div className="cta">
                        <button className="cta-select">Learn More</button>
                        <button className="cta-add">Projects</button>
            </div>
        </div>

  <div>      
    <div className="cover">
        <img src={img} alt="Image" />
    </div>
  </div>
        </section>
    <div className="menu-select" >
        <img src={isLeft} alt />
        <img src={isDot} alt />
        <img src={isDotF} alt />
        <img src={isDotF} alt />
        <img src={isRight}alt />
    </div>



        <img className="big-circle" src={imgBig} alt />
        <img className="medium-circle" src={imgMedium} alt />
        <img className="small-circle" src={imgSmall} alt />
    </main>
</>
      
    );
}

export default Home;
 