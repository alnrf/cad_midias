import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title"><b>Título Nacional: {project.title_pt}</b></span>
                </div>
                <div className="card-action grey lighten-4 grey-text">
               
                <p><b>Título Internacional:</b> {project.title_eng}</p>
                <p><b>Categoria:</b> {project.category}</p>
                <p><b>Mídia:</b> {project.media_type}</p>
                <p><b>Ano de Lançamento:</b> {project.year}</p>
                <p><b>Volume/Temporada:</b> {project.season}</p>
                <p><b>Embalagem:</b> {project.package}</p>
            
                <div className="image" >
                <img src={project.cover} width= '200px' alt=''/>
                
                </div>
              </div>
            </div>
          </div>
        )
    } else {
        return (
            <div className='container center'>
                <p>Dados não existem</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.media;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'media' }
    ])
)(ProjectDetails);
