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
  onSearchProject=(event)=>{
    this.setState({projectField:event.target.value})
 
  }
    render() {
      const filteredproject = this.state.projects.filter(projects=>{
        return projects.name.toLowerCase().includes(this.state.projectField.toLowerCase());
      })    
    return (
    <div className="App">
      <h1>Projects</h1>
      <SearchProject searchChange={this.onSearchProject}/>
     <ProjectList projects={filteredproject}/> 
    </div>
    );
  }
}

export default App;
