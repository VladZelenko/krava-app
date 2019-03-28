import React, {Component} from 'react'

class Car extends Component {
  render() {
    return(
      <React.Fragment>
        <h1>This Component car</h1>
        <p>Car name: {this.props.name}</p>
        <p>Car year: {this.props.year}</p>
      </React.Fragment>
    );
  }
}

export default Car;