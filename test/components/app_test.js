import { renderComponent , expect } from '../test_helper';
import faker from 'faker';
import App from '../../src/components/app';
import ForecastHeader from '../../src/components/forecast-header';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should render the app component', () => {
    expect(component).to.exist;
  });
});

describe('ForecastHeader', () => {
  let component;

  const speed = faker.random.number({min: 1, max: 10, precision:0.0001});

  const props = {
    weather: {
      windSpeed: 5.43,
      time: 14780000,
    }
  }

  beforeEach(() => {
    component = renderComponent(ForecastHeader, props);
  });

  it('should render the ForecastHeader component', () => {
    expect(component).to.exist;
  });

  it('should display the windSpeed prop', () => {
    console.log(window.$('.header'));
    console.log(component);
  });



});
