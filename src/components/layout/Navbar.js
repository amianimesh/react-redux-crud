import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
            <nav className='wrapper white'>
                <div className='container'>
                    <Link to='/' className='brand-logo center black-text '>Freelance</Link>
                </div>
            </nav>
    )
}

export default Navbar