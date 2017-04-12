import axios from 'axios';
import { APIService } from './APIService';
import { productAddress, addresses } from '../utils/static-data.js';

describe('APIService', () => {
  let service;
  beforeEach(() => service = new APIService());

  describe('constructor', () => {
    it('constructs with a base url', () => {
      expect(service.service.defaults.baseURL).toBeTruthy();
      expect(service.service.defaults.baseURL).toEqual('https://sourcery-api.herokuapp.com');
    });
  });

  describe('getCheckpoints', () => {
    it('returns checkpoint objects', async () => {
      const response = await service.getCheckpoints(addresses[productAddress])
      expect(response.data[0]).toBeTruthy();

      const firstCheckpoint = response.data[0];
      expect(firstCheckpoint).toEqual(expect.objectContaining({
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

  describe('createCheckpoint', () => {
    it('returns a checkpoint object', async () => {
      const checkpoint = { 
        creator: "John", 
        street_address: "Cr 70C No. 4-42 OF 203, Medellín", 
        city: "Medellín", 
        state: "Medellín", 
        country: "Colombia", 
        zipcode: "050022",
        lat: 6.27053,
        lng: -75.57211999999998
      };

      const response = await service.createCheckpoint(checkpoint);
      expect(response.data).toBeTruthy();

      const checkpointResponse = response.data;
      expect(checkpointResponse).toEqual(expect.objectContaining({
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
  
  describe('createLot', () => {
    it('returns a lot object', async () => {
      const lot = { product_id: 31 }; 
      const response = await service.createLot(lot);
      expect(response.data).toBeTruthy();

      const lotResponse = response.data;
      expect(lotResponse).toEqual(expect.objectContaining({
        id: expect.any(Number),
        product_id: expect.any(Number),
      }));
    });
  });
});
