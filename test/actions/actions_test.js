import faker from 'faker';
import { expect } from '../test_helper';
import { FETCH_LOCATION, FETCH_FORECAST, fetchLocation, fetchForecast } from '../../src/actions/index';

const props = {
  latitude: faker.random.number({ min: -90, max: 90, precision: 0.001 }),
  longitude: faker.random.number({ min: -180, max: 180, precision: 0.001 })
};

describe('Actions', () => {
  describe('Action-FetchLocation', () => {
    it('has the correct type', () => {
      const action = fetchLocation(props);
      expect(action.type).to.equal(FETCH_LOCATION);
    });
  });

  describe('Action-FetchForecast', () => {
    it('has the correct type', () => {
      const action = fetchForecast(props);
      expect(action.type).to.equal(FETCH_FORECAST);
    });
  });
});
