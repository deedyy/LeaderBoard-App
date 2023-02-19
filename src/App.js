import React from 'react';

import './App.css';
import Nav from './Nav';
import Board from './Components/Board';
import StudentList from './Components/studentlist';
import Studentprofiles from './Components/Studentprofiles';




function App() { 
  
    return (
    
    <div className="App">
      <Nav/> 
      <Board/>
       <StudentList/> 
       <Studentprofiles/>
       
          
    
    </div>
  
    
  );
}

export default App;
