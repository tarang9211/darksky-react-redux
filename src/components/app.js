import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import moment                 from 'moment';
import {
  fetchForecast,
  fetchLocation
}                             from '../actions/index';
import ForecastHeader         from './forecast-header';
import ForecastContent        from './forecast-content';

class App extends Component {
  componentWillMount() {
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
    this.props.fetchLocation(coords);
  }

  //callback to handle error
  handleGeolocationError = (error) => {
    console.log(error);
  }

  renderForecastedWeather() {
    if (this.props.forecast.daily && this.props.location) {

      const data = this.props.forecast.daily.data.slice(0,5);
      const { city, country } = this.props.location
      return data.map((weather) => {
        return (
          <div className="forecast-list-item" key={weather.time}>
            <ForecastHeader weather={weather} />
            <ForecastContent maxTemp={weather.temperatureMax} minTemp={weather.temperatureMin} />
            <div className="footer">
              <p>{city}, {country}</p>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="forecast-list">
        {this.renderForecastedWeather()}
      </div>
    );
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
