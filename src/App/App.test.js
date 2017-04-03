import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header/Header';
import Map from './Map/Map';
import ProductSearch from './ProductSearch/ProductSearch';

describe('<App />', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeTruthy();
  });

  it('renders a header and main section', () => {
    const app = shallow(<App />);
    expect(app.contains(<Header />)).toBeTruthy();
    expect(app.find(Header).length).toEqual(1);
    expect(app.find('main').length).toEqual(1);
    expect(app.find(ProductSearch).length).toEqual(1);
    expect(app.find(Map).length).toEqual(1);
  });

  it('renders a single header', () => {
    const app = shallow(<App />);
    expect(app.find(Header).length).toEqual(1);
  });

  it('renders a single map', () => {
    const app = shallow(<App />);
    expect(app.find(Map).length).toEqual(1);
  });

  it('renders a single search section', () => {
    const app = shallow(<App />);
    expect(app.find(ProductSearch).length).toEqual(1);
  });
});
