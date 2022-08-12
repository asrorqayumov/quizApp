import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './style';

const Navbar = () => {
    return (
        <Nav>
          <Link to='/' className='brand-text'>
              Test
          </Link>
        </Nav>
    );
};



export default Navbar;