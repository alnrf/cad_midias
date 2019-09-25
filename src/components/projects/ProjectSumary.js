import React from 'react';


const Style = {
   width: '35rem'
}
const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-2 project-summary" style={Style}>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><b>{project.title_pt}</b></span>
                <p>{project.title_eng}</p>
                <p>{project.category} - {project.year} - {project.media_type}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;