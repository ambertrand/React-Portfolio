import React from 'react';
import projects from '../../utils/project';
import Project from '../Project';


function Portfolio(props) {
    
    return (
        <div className="row">
            {projects.map(projectData => {
                return (projects.indexOf(projectData),
                <Project key={projectData.name.toString()} projectData={projectData} />
                )
            })}
        </div>
    );
}

export default Portfolio;