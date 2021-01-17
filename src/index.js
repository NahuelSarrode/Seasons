import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      lat: null,
      errorMessage: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage} </div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude:{this.state.lat} </div>
    }

    return <div>Loaging...</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;