import React from 'react'
import Home from '../Home';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

const MainPage = () => {
    let username=prompt("Enter User Name");
    let page=prompt("Enter Page you want to go");
    
    switch (page) {
        case "Home":
            return <HomePage data={username} data2={page}/>
            
        case "Contact":
            return <ContactPage data={username} data2={page}/>
            
        case "About":
            return <AboutPage data={username} data2={page}/>
            

        default:
            return <h1>Error</h1>
            
    }
  
}

export default MainPage