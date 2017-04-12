import axios from 'axios';
import apiService from './apiService';
import { productAddress, addresses } from './utils/static-data.js';

describe('apiService', () => {
  let service;
  beforeEach(() => service = new apiService());

  describe('constructor', () => {
    it('constructs with a base url', () => {
      expect(service.service.defaults.baseURL).toBeTruthy();
      expect(service.service.defaults.baseURL).toEqual('http://localhost:9000');
    });
  });

  describe('getLocations', () => {
    it('returns location objects', async () => {
      const response = await service.getLocations(addresses[productAddress]);
      expect(response.data[0]).toBeTruthy();

      const firstLocation = response.data[0];
      expect(firstLocation).toEqual(expect.objectContaining({
        id: expect.any(Number),
        creator: expect.any(String),
        street_address: expect.any(String),
        city: expect.any(String),
        state: expect.any(String),
        country: expect.any(String),
        ethereum_address: expect.any(String),
        lat: expect.any(String),
        lng: expect.any(String),
        zipcode: expect.any(String),
      }));
    });
  });
});
