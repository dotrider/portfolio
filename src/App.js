import React from 'react';
import router from './routes';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      {router}
      <Footer/>
    </div>
  );
}

export default App;
