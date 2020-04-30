import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    return(
           <section id='heading'>
            <nav id='nav'>
            <Link to="/" className="item"><span className='menu'>Landing</span></Link>
            <Link to="/projects" className="item"><span className='menu'>Projects</span></Link>
            <Link to="/about" className="item"><span className='menu'>About</span></Link>
            </nav>
            </section>
    )
}

export default Nav;