import React from 'react';
import logo from './../img/Product_Logo.gif'
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar style={{ backgroundColor: '#000033' }}>
            <Navbar.Brand href="https://producthackers.com/es/">
                <img
                    alt="Logo-product-hackers"
                    src={logo}
                    width="20%"
                    height="100%"
                    className="d-inline-block align-top"
                />{' '}
        </Navbar.Brand>
        </Navbar>
     );
}
 
export default Navigation;