import faker from 'faker';
import { renderComponent, expect } from '../test_helper';
import ForecastFooter from '../../src/components/forecast-footer';

describe('ForecastFooter', () => {
  let component;

  const state = faker.hacker.noun();
  const country = faker.hacker.noun();

  const props = {
    state,
    country
  };

  beforeEach(() => {
    component = renderComponent(ForecastFooter, props);
  });

  it('should render the ForecastFooter component', () => {
    expect(component).to.exist;
  });

  it('should display the city and country', () => {
    expect(component.find('.footer-location')).to.have.text(`${state}, ${country}`);
  });
});
