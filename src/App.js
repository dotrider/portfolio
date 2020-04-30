import React from 'react';
import router from './routes';
import Nav from './Components/Nav/Nav';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">

  <Nav/>
   {router}
    </div>
  );
}

export default App;
