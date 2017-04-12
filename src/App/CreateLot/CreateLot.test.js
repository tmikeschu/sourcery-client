import React from 'react';
import CreateLot from './CreateLot';
import { shallow } from 'enzyme';

describe('<CreateLot />', () => {
  it('renders without crashing', () => {
    const createLot = shallow(<CreateLot lot={{name: ""}} />);
    expect(createLot).toBeTruthy();
  });

  it('renders a form to create a checkpoint', () => {
    const createLot = shallow(<CreateLot lot={{name: ""}} />);
    expect(createLot.is('.create-lot')).toBeTruthy();
    expect(createLot.find('input[type="text"]').length).toEqual(1);
    expect(createLot.find('input[type="submit"]').length).toEqual(1);
  });
});

