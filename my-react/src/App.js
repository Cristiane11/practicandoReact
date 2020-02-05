import React, {Component} from 'react';
import {projects} from './projects';
import ProjectList from './ProjectList';
import SearchProject from './SearchProject';
import './App.css';


  
  class App extends Component {
    constructor(){
      super()
      this.state={
        projects:projects,
        projectField:''
      }
    }
  
    render() {
    return (
    <div className="App">
      <h1>Projects</h1>
      <SearchProject/>
     <ProjectList projects={this.state.projects}/> 
    </div>
    );
  }
}

export default App;
