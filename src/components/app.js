import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import moment                 from 'moment';
import {
  fetchForecast,
  fetchLocation
}                             from '../actions/index';
import ForecastHeader         from './forecast-header';
import ForecastContent        from './forecast-content';
import ForecastFooter         from './forecast-footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    }
  }
  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.handleGeolocationSuccess,
        this.handleGeolocationError,
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 30000 },
      );
    }
  }

  //callback to handle success
  handleGeolocationSuccess = (position) => {
    const { coords } = position;
    this.props.fetchForecast(coords);
    this.props.fetchLocation(coords);
  }

  //callback to handle error
  handleGeolocationError = (error) => {
    console.log(error);
    if (error.code == 1) {
      this.setState({ error: 'Please enable permissions to access location and reload the page' });
    }
    else if (error.code == 2 && error.message.match(/^Network location provider at 'https:\/\/www.googleapis.com\/' : Returned error code 403.$/)) {
      this.setState({ error: 'Seems like the internal service for geolocation is down. Please try in a few minutes!'});
    }
  }

  renderForecastedWeather() {
    if (this.props.forecast.daily && this.props.location) {

      const data = this.props.forecast.daily.data.slice(0,5);
      const { state, country } = this.props.location;

      return data.map((weather) => {
        return (
          <div className="forecast-list-item" key={weather.time}>
            <ForecastHeader weather={weather} />
            <ForecastContent maxTemp={weather.temperatureMax} minTemp={weather.temperatureMin} />
            <ForecastFooter state={state} country={country} />
          </div>
        );
      });
    }
  }

  render() {
    if (this.state.error != '') {
      return (
        <div className='error'>
          <h3>{this.state.error}</h3>
        </div>
      )
    } else if (this.props.forecast.length == 0 || !this.props.location) {
      return (
        <div className='loading'>
          Loading
        </div>
      )
    } else {
      return (
        <div className="forecast-list">
          {this.renderForecastedWeather()}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    forecast: state.forecast.all,
    location: state.location.location,
  };
}

export default connect(mapStateToProps, {
  fetchForecast: fetchForecast,
  fetchLocation: fetchLocation,
})(App);
