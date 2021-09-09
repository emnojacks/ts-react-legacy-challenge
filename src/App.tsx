import React from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';
import FetchWeather from './components/FetchWeather'


class App extends React.Component{
  render() {
  return(
    <div className="App">
      <header className="App-header">
        <p>
         This app will retrieve your current location and fetch the local weather in your area.
        </p>
        <FetchWeather />
      </header>
    </div>
  );
  }
  
}

export default App;
