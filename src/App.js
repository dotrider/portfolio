import React from 'react';
import router from './routes';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

   <Link to="/Landing" className="item">Landing</Link>
    <Link to="/projects" className="item">Projects</Link>
    <Link to="/about" className="item">About</Link>
   {router}
    </div>
  );
}

export default App;
