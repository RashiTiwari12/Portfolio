import React from 'react'
import './ContactPage.css';

const ContactPage = () => {
    return (
        <>
            <div className='contact-main-container '>
                <p> <strong>Gmail:</strong>  cmtiwari70@gmail.com</p>

                <a target={'_blank'} href="https://github.com/RashiTiwari12">
                    <p>My github Account </p>
                </a>
                <a target={'_blank'} href='https://www.linkedin.com/in/rashitiwari12/'>   <strong><p>My LinkedIn </p></strong></a>
                {/* <p>My LinkedIn: https://www.linkedin.com/in/rashitiwari12/</p> */}
            </div>

        </>
    )
}

export default ContactPage


// Use the #id selector
// <p id="opening">Hyperlinks are utilized by a web browser to move from one page to another...</p>
// Create a link to the selector
// <a href="#opening">Take me to the opening paragraph.</a>