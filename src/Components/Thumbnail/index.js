import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project">
                    <img src={props.image} alt="Project" />
                </div>
                <div className="project-title">{props.title}</div>
                <div className="project-category">{props.category}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;