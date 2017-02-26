import { renderComponent , expect } from '../test_helper';
import faker from 'faker';
import moment from 'moment';
import ForecastHeader from '../../src/components/forecast-header';

describe('ForecastHeader', () => {
  let component;

  const speed = faker.random.number({min: 1, max: 10, precision:0.01});

  const props = {
    weather: {
      windSpeed: speed,
      time: 1488135447,
    }
  }

  beforeEach(() => {
    component = renderComponent(ForecastHeader, props);
  });

  it('should render the ForecastHeader component', () => {
    expect(component).to.exist;
  });

  it('should display the windSpeed prop', () => {
    expect(component.find('.header-wind')).to.have.text(`${speed.toFixed(0)}mph`);
  });

  it('should display the time prop', () => {
    const time = moment.unix(props.weather.time).format('ddd, DD MMM');
    expect(component.find('.header-time')).to.have.text(time);
  });
});
