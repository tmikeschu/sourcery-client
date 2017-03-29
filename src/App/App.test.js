import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from './Header/Header';
import ProductPath from './ProductPath/ProductPath';

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

describe('<App />', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeTruthy();
  });

  it('renders a Header child', () => {
    const app = mount(<App />);
    expect(app.find(Header).length).toEqual(1);
  });

  it('renders ProductPath children ', () => {
    const app = mount(<App />);
    app.setState({goods: goods});
    expect(app.find(ProductPath).length).toEqual(2);
  });
});
