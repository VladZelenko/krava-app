import React, { Component } from 'react';
import './App.css';
import Car from './components/Car/Car';


class App extends Component {

  state = {
    car: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2019'},
      {name: 'BMW', year: '2015'}
    ]
  }

  render() {
    const CARS = this.state.car
    return (
      <div className="App">
        <Car name={CARS[0].name} year={CARS[0].year}/>
        <Car name={CARS[1].name} year={CARS[1].year}/>
        <Car name={CARS[2].name} year={CARS[2].year}/>
      </div>
    );
  }
}

export default App;
