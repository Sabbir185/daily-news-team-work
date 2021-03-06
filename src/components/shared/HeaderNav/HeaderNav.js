import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './HeaderNav.css'

const HeaderNav = () => {
    const userInfo = useSelector((state) => state.userReducer.userInfo);


    return (
        <section className="container-fluid mt-2 sticky-top">

            <Navbar bg="light" expand="lg">
                <Navbar.Brand> <Link className="text-decoration-none" to="/">
                    <span className="logo">Daily News</span> </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to='/'>Home</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to=''>Breaking News</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to=''>International</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to=''>Technology</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to=''>Education</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to=''>About Us</Link> </Nav.Link>

                        {
                            userInfo.name ? 
                            <Nav.Link> <Link className="mr-2 text-decoration-none user">{userInfo.name}</Link> </Nav.Link>
                            :
                            <Nav.Link> <Link to='/login' className="mr-2 text-decoration-none color"><button className="btn btn-success btn-sm">Login</button></Link> </Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </section >
    );
};

export default HeaderNav;