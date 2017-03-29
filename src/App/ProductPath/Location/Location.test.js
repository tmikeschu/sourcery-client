import React from 'react';
import { shallow } from 'enzyme';
import Location from './Location';

describe('<Location />', () => {
  it('renders without crashing', () => {
    const location = shallow(<Location />); 
    expect(location).toBeTruthy();
  });

  it('renders a list of information', () => {
    const location = shallow(<Location  
      name='Cafe'
      lat={79}
      lng={79}
      type='business'
      key={0}
    />); 

    expect(location.find('li').length).toEqual(4);

    const l = location.instance();
    const listItems = [
      <li>Name: {l.props.name}</li>,
      <li>Latitude: {l.props.lat}</li>,
      <li>Longitude: {l.props.lng}</li>,
      <li>Type: {l.props.type}</li>
    ];
    expect(location.contains(listItems)).toBeTruthy();
  });
});
