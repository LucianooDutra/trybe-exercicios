import React from 'react';
import ApiCao from './components/ApiCao';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ApiCao />
        </header>
      </div>
    );
  }
}

export default App;
