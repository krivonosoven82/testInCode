import React, { Component } from 'react';
import ClientsList from './components/clientsList/index';
import clients from './clients.json';
import './App.scss';


class App extends Component {

  render() {

    return (
      <div className="app">
        <ClientsList
            items={clients}
        />
      </div>
    );
  }
}

export default App;
