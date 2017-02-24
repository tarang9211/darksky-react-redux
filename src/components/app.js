import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions/index';

class App extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.handleGeolocationSuccess,
      this.handleGeolocationError,
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 },
    );
  }

  //callback to handle success
  handleGeolocationSuccess = (position) => {
    const { coords } = position;
    this.props.fetchForecast(coords);
  }

  //callback to handle error
  handleGeolocationError = (error) => {
    console.log(error);
  }
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

function mapStateToProps(state) {
  return { forecast: state.forecast.all };
}

export default connect(mapStateToProps, {
  fetchForecast: fetchForecast,
})(App);
