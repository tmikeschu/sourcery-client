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
    expect(header.contains(
      <header className="header">
        <h1>Sourcery</h1>
        <a href="#">Sign in to log a checkpoint</a>
      </header>
    )).toBeTruthy(); 
  });
});
