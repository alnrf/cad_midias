import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

const ProjectDetails = props => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card horizontal grey lighten-4 black-text">
          <div className="card-image">
            <img src={project.cover} height="300px" alt="" />
          </div>
          <div className="card-content grey lighten-4 black-text">
            <h1 className="card-title">
              <b>{project.title_pt}</b>
            </h1>
            <p>
              <b>Título Internacional:</b> {project.title_eng}
            </p>
            <p>
              <b>Categoria:</b> {project.category}
            </p>
            <p>
              <b>Mídia:</b> {project.media_type}
            </p>
            <p>
              <b>Ano de Lançamento:</b> {project.year}
            </p>
            <p>
              <b>Volume/Temporada:</b> {project.season}
            </p>
            <p>
              <b>Embalagem:</b> {project.package}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Dados não existem</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.media;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "media" }])
)(ProjectDetails);
