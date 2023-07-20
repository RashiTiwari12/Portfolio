import React from 'react'
import './ProjectPage.css';
import Shoplane from "./img/shoplane-homepage.PNG"
import Grocery from "./img/Grocery-website.PNG"
import Ecar1 from "./img/E-car-first.PNG"
import Ecar2 from "./img/E-car-second.PNG"
import ToDoList from "./img/ToDoList.PNG"
import { Link } from 'react-router-dom';
const ProjectPage = () => {
    return (
        <>
            <div>
                <div className='project-container'>
                    <section className='left-section'>
                        <h1>Shop-Lane</h1>
                        <a target="_blank" href='https://shoplane-e.netlify.app/'>visit Web-app</a>
                        <h3>my first react app with redux .
                            It is an E-commerce web app helps you to chose varities of products.
                            For navigation React Router Dom is used . Formik and Yup is used for Validation.
                            In this web app you can choose your favourite product and add it to favourite page or
                            cart apge as per your wish.
                            <br />
                            {/* ...<Link>see more</Link> */}
                        </h3>

                    </section>
                    <section className='right-section'>
                        <img className='main-image' src={Shoplane} alt="Shoplane" />
                    </section>

                </div>
                <div className='project-container'>
                    <section className='left-section'>
                        <h1>Go-Grocery</h1>
                        <a target="_blank" href='https://rashitiwari12.github.io/grocery-store/' >visit site 📌</a>
                        <h3> This project is a grocery store website built using HTML and CSS, focusing on a simple
                            and elegant design."
                            <br />
                            {/* ...<Link>see more</Link> */}
                        </h3>


                    </section>
                    <section className='right-section'>
                        <img className='main-image' src={Grocery} alt="Shoplane" />
                    </section>
                </div>
                <div className='project-container'>
                    <section className='left-section'>
                        <h1>E-carzz</h1>
                        <a target="_blank" href='https://rashitiwari12.github.io/E-carz/' >visit site 📌</a>
                        <h3>E-carz is a stunning automotive website built solely with HTML and CSS. Its responsive design and
                            thoughtful layout offer a seamless browsing experience for users.
                            {/* ...<Link>see more</Link> */}
                        </h3>
                    </section>
                    <section className='right-section'>
                        <img className='main-image' src={Ecar1} alt="Shoplane" />
                        {/* <img className='main-image' src={Ecar2} alt="Shoplane" /> */}
                    </section>
                </div>
                <div className='project-container'>
                    <section className='left-section'>
                        <h1>To Do List</h1>
                        <a target="_blank" href='https://rashitiwari12.github.io/ToDoList/' >visit site 📌</a>
                        <h3>The ToDoList website, crafted using HTML, CSS, and JavaScript, offers an interactive and
                            user-friendly interface for organizing tasks.
                            Its seamless use of these technologies enhances productivity and task management efficiency.
                            {/* ...<Link>see more</Link> */}
                        </h3>
                    </section>
                    <section className='right-section'>
                        <img className='main-image' src={ToDoList} alt="Shoplane" />
                        {/* <img className='main-image' src={Ecar2} alt="Shoplane" /> */}
                    </section>
                </div>
            </div>
        </>
    )
}

export default ProjectPage