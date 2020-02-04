import React, {Component} from 'react';
import {projects} from './projects';
import ProjectList from './ProjectList';
import './App.css';

class App extends Component {
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
