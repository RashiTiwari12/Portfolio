import React from 'react'
import './HomePage.css';
import { Link } from 'react-router-dom'
import Avtar from './img/Avatar3.jpg'
import github from './icon/git-Icon.svg'
import insta from './icon/insta-Icon.svg'
import fb from './icon/fb-Icon.png'

const HomePage = () => {
    return (
        <>
            <div className='main-container'>
                <img className='main-image' src={Avtar} alt="Woman Avatar" />
                <div className='main-container-para'> <p> Hey! My name is Rashi Tiwari and I'm aspiring full stack developer.<br></br>
                    I am learning HTML, CSS, JS, Python <br></br>
                    I have worked on various projects using React, bootstrap, tailwind etc.
                    <br></br>
                    .</p></div>
            </div>



            <div className='project-container'>
                <h1>My Projects</h1><br />
                <section className='right-section'>
                    <h1>GYM</h1>
                    <a target="_blank" href='https://react-gym-tailwind.netlify.app/' >visit site 📌</a>
                    <h3>React-app.<br /> I used tailwind CSS for styling.
                        ...<Link to='/project'>see more projects</Link>
                    </h3>
                </section>
                <section className='right-section'>
                    <h1>E-carzz</h1>
                    <a target="_blank" href='https://rashitiwari12.github.io/E-carz/' >visit site 📌</a>
                    <h3>HTML and CSS responsive website .
                        ...<Link to='/project'>see more</Link>
                    </h3>
                </section>
            </div>
            <footer className="footer">
                <div class="social-links" >
                    {/* <a href="https://github.com/RashiTiwari12">
                        <img src={fb} alt="facebook-icon" />
                    </a>
                    <a href="https://github.com/RashiTiwari12">
                        <img src={insta} alt="insta-icon" />
                    </a> */}
                    <a target={'_blank'} href="https://github.com/RashiTiwari12">
                        <img style={{ color: "blue" }} src={github} alt="twitter-icon" />
                    </a>

                    <img />
                </div>
            </footer>
        </>
    )
}

export default HomePage