//This is App file

import './Components/App.css';
import React  from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
//import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import './Components/Testimonials.css';




function App () {
 return (

<Router>
   
    <div className="App">
        <Navbar />
           <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/testimonials"  component={Testimonials} />
                <Route path="/Contact" component={Contact }  />
           </Switch>
        <Footer />
    </div>
    
</Router>

 );

 }

 export default App;

