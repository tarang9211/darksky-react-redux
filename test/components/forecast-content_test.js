import { renderComponent , expect } from '../test_helper';
import faker from 'faker';
import ForecastContent from '../../src/components/forecast-content';

describe('ForecaseContent', () => {
  let component;

  const maxTemp = faker.random.number({ min: 30, max: 100, precision: 0.1 })
  const minTemp = faker.random.number({ min: 1, max: 60, precision: 0.1 })

  const props = {
    maxTemp: maxTemp,
    minTemp: minTemp,
  }

  beforeEach(() => {
    component = renderComponent(ForecastContent, props)
  });

  it('should render the component', () => {
    expect(component).to.exist;
  });

  it('should display the max temp prop', () => {
    const maxTempDisplayed = `${maxTemp.toFixed(0)}°`;
    expect(component.find('.content-max-temp')).to.have.text(maxTempDisplayed)
  });

  it('should display the min temp prop', () => {
    const minTempDisplayed = `${minTemp.toFixed(0)}°`;
    expect(component.find('.content-min-temp')).to.have.text(minTempDisplayed);
  });
});
