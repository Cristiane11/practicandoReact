import React from 'react';
import logo from './logo.svg';
import {projects} from './projects';
import ProjectList from './ProjectList';
import './App.css';

function App() {
  return (
    <div className="App">
     <ProjectList projects={projects}/> 
    </div>
  );
}

export default App;
