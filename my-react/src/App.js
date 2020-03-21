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
  onSearchProject(event){
    console.log(event.target.value);
  }
    render() {
    return (
    <div className="App">
      <h1>Projects</h1>
      <SearchProject searchChange={this.onSearchProject}/>
     <ProjectList projects={this.state.projects}/> 
    </div>
    );
  }
}

export default App;
