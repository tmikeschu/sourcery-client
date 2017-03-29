import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductPath from './ProductPath';
import Location from './Location/Location';

describe('<ProductPath />', () => {
  const coffeeLocations = [
    { lat: 79, lng: 10, name: 'Coffee Grower', type: 'origin' },
    { lat: 7, lng: 19, name: 'Delivery Service', type: 'transport' },
    { lat: 8, lng: 52, name: 'Cafe', type: 'restaurant' } 
  ];

  const grapesLocations = [
    { lat: 79, lng: 10, name: 'Vinyard', type: 'origin' },
    { lat: 8, lng: 52, name: 'Winery', type: 'business' } 
  ];

  const goods = [ 
    { name: 'coffee', locations: coffeeLocations },
    { name: 'grapes', locations: grapesLocations },
  ];

  it('renders without crashing', () => {
    const productPath = shallow(<ProductPath good={goods[0]} key={0} />); 
    expect(productPath).toBeTruthy();
  });

  it('has a start', () => {
    const productPath = shallow(<ProductPath good={goods[0]} key={0} />); 
    expect(productPath.find('section.start').length).toEqual(1); 
    
    const start = productPath.find('section.start');
    expect(start.contains(
      <p>Start</p> 
    )).toBeTruthy();
  });

  it('has a finish', () => {
    const productPath = shallow(<ProductPath good={goods[0]} key={0} />); 
    expect(productPath.find('section.finish').length).toEqual(1); 
    
    const start = productPath.find('section.finish');
    expect(start.contains(
      <p>Finish</p> 
    )).toBeTruthy();
  });

  it('has product locations', () => {
    const productPath = mount(<ProductPath good={goods[0]} key={0} />); 
    expect(productPath.find(Location).length).toEqual(3);
  });
});
