import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />); 
    expect(header).toBeTruthy();
  });

  it('has a Sourcery heading', () => {
    const header = shallow(<Header />); 
    const title = <h1>Sourcery</h1>;
    expect(header.contains(title)).toBeTruthy(); 
  });
});
