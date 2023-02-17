import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserContext from './components/UserContext';
import Instructions from './components/Instructions';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Router/>
      
      </BrowserRouter>
    </div>
  );
}
// routs axios, server
export default App;
