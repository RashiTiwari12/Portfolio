import React from 'react'
import { Link } from 'react-router-dom';
import Avtar from './Avtar.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <>

            <div className='navbar-options'>
                <h1>My Portfolio</h1>
                <Link to="/"> <span><h2>Home</h2></span></Link>
                <Link to="/project"><h2>Projects</h2></Link>
                <Link to="/contact"><h2>Contact</h2></Link>
                {/* <h2>More about me</h2> */}
            </div>
            {/* <div className='main-container'>
                <img className='main-image' src={Avtar} alt="Woman Avatar" />
                <div className='main-container-para'> <p> Hey! My name is Rashi Tiwari and I'm aspiring full stack developer.<br></br>
                    I have completed my  BSc from xyz college and now Im learning programming languages.<br></br>
                    I understand HTML, CSS and Javascript and I am excited to learn more languages like Python and Java.
                    <br></br>
                    .</p></div>
            </div> */}
            <div className='project'>

            </div>
        </>
    )
}

export default Navbar