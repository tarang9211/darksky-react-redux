import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import moment                 from 'moment';
import { fetchForecast }      from '../actions/index';
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
  }

  //callback to handle error
  handleGeolocationError = (error) => {
    console.log(error);
  }

  renderForecastedWeather() {
    if (this.props.forecast.daily) {

      const data = this.props.forecast.daily.data.slice(0,5);
      console.log(data);
      return data.map((weather) => {
        return (
          <div className="forecast-list-item" key={weather.time}>
            <ForecastHeader weather={weather} />
            <ForecastContent maxTemp={weather.temperatureMax} minTemp={weather.temperatureMin} />
            <div className="footer">
              <p>Pune, India</p>
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
  return { forecast: state.forecast.all };
}

export default connect(mapStateToProps, {
  fetchForecast: fetchForecast,
})(App);
