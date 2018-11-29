import React, { Component } from 'react';
import { Provider } from './Context';
import Contacts from './components/Contacts';
import Skills from './components/Skills'; 
import Events from './components/Events';
import Educations from './components/Educations';
import Interests from './components/Interests';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
            <Contacts />
            <br />
            <Skills />
            <br />
            <Events />
            <br />
            <Educations />
            <br />
            <Interests />
        </div>
      </Provider>
    );
  }
}

export default App;
