import React, {Component} from 'react';
import {projects} from './projects';
import ProjectList from './ProjectList';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      project:projects,
    projectField:''
    }
    
  }
  render() {
    return
    (
    <div className="App">
      <h1>Projects</h1>
     <ProjectList projects={projects}/> 
    </div>
    )
  };
}

export default App;
