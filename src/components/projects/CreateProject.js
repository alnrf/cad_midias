import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title_pt: '',
    title_eng: '',
    category: '',
    year:'',
    media_type: '',
    season: '',
    package: '',
    cover: '',
    date: new Date
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);

 }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Nova mídia</h5>
          <div className="input-field">
            <label htmlFor="title_pt">Título Nacional</label>
            <input type="text" id="title_pt" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title_eng">Título Internacional</label>
            <input type="text" id="title_eng" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="category">Categoria</label>
            <input type="text" id="category" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="category">Ano de Lançamento</label>
            <input type="text" id="year" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="media_type">Mídia</label>
            <input type="text" id="media_type" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="season">Sequência/Temporada</label>
            <input type="text" id="season" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="package">Embalagem</label>
            <input type="text" id="package" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="cover">Capa</label>
            <input type="text" id="cover" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0" type="submit" name="action">Cadastrar
            <i className="material-icons right">save</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);
