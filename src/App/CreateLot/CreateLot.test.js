import React from 'react';
import CreateLot from './CreateLot';
import { shallow } from 'enzyme';

describe('<CreateLot />', () => {
  it('renders without crashing', () => {
    const lot = {name: ""};
    const products = [{ id: 1, name: "" }];
    const createLot = shallow(<CreateLot lot={lot} products={products} />);
    expect(createLot).toBeTruthy();
  });

  it('renders a form to create a checkpoint', () => {
    const lot = {name: ""};
    const products = [{ id: 1, name: "" }];
    const createLot = shallow(<CreateLot lot={lot} products={products} />);
    expect(createLot.is('.create-lot')).toBeTruthy();
    expect(createLot.find('select').length).toEqual(1);
    expect(createLot.find('input[type="submit"]').length).toEqual(1);
  });
});

