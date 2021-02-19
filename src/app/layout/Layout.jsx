
import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import './Layout.css';



export default ({ children }) => {
    return (
        <div className='__dml container'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

