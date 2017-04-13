import React from 'react';
import CreateLot from './CreateLot';
import { shallow } from 'enzyme';

describe('<CreateLot />', () => {
  it('renders without crashing', () => {
    const newLot = {id: 0};
    const lot = {name: ""};
    const products = [{ id: 1, name: "" }];
    const createLot = shallow(<CreateLot lot={lot} products={products} newLot={newLot} />);
    expect(createLot).toBeTruthy();
  });

  it('renders a form to create a checkpoint', () => {
    const newLot = {id: 0};
    const lot = {name: ""};
    const products = [{ id: 1, name: "" }];
    const createLot = shallow(<CreateLot lot={lot} products={products} newLot={newLot} />);
    expect(createLot.is('.create-lot')).toBeTruthy();
    expect(createLot.find('select').length).toEqual(1);
    expect(createLot.find('input[type="submit"]').length).toEqual(1);
  });
});

