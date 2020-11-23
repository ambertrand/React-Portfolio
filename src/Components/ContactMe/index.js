import React from 'react';
import Pdf from '../../img/Resume.pdf';


function Contact() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center bg-secondary">
                <h3 className="col-12 text-center m-2">Contact Info</h3>
            </div>
            <div className="row bg-secondary p-3">
                <div className="col-12 text-center">
                    <a className="icon m-3" href="https://github.com/ambertrand" target="_blank" rel="noreferrer noopener"><i className="fa fa-github fa-4x"></i></a>
                    <a className="icon m-3" href="https://www.linkedin.com/in/alex-bertrand/" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin-square fa-4x"></i></a>
                    <a className="icon m-3" href={Pdf} target="_blank" rel="noreferrer noopener"><i className="fa fa-file-pdf-o fa-4x"></i></a>
                </div>
            </div>

        </div>
    )
}

export default Contact;