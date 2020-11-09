import React from "react";

function Projects(props) {

  return (
    // <div className="row" >
      <div className="bg-light col-sm-12 col-md-6 col-lg-4 mb-2" key={props.projectData.name.toString()}>
        <div className="card h-100">
          <img src={props.projectData.image} className="img-card-top overflow-hidden img-fluid" alt={props.projectData.name} />
          <hr />
          <div className="card-body">
            <h4>{props.projectData.name}</h4>
            <p className="card-text">{props.projectData.description}</p>
            <h5>Technologies Used</h5>
            <ul>
              {props.projectData.technologies.map(item => <li className="card-text">{item}</li>)}
            </ul>
            <a className="btn btn-primary m-2" href={props.projectData.code} target="_blank" rel="noreferrer noopener">View Code</a>
            <a className="btn btn-primary m-2" href={props.projectData.deployment} target="_blank" rel="noreferrer noopener">View Deployment</a>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Projects;