import React from 'react';
import CreateCheckpoint from './CreateCheckpoint';
import { shallow } from 'enzyme';

describe('<CreateCheckpoint />', () => {
  let checkpoint = {
    creator: "",
    street_adress: "",
    city: "",
    state: "",
    country: "",
    lat: "",
    lng: "",
    zipcode: ""
  };

  it('renders without crashing', () => {
    const createCheckpoint = shallow(<CreateCheckpoint checkpoint={checkpoint} />);
    expect(createCheckpoint).toBeTruthy();
  });

  it('renders a form to create a checkpoint', () => {
    const createCheckpoint = shallow(<CreateCheckpoint checkpoint={checkpoint} />);
    expect(createCheckpoint.is('.create-checkpoint')).toBeTruthy();
    expect(createCheckpoint.find('h3').length).toEqual(1);
    expect(createCheckpoint.find('input[type="text"]').length).toEqual(8);
    expect(createCheckpoint.find('input[type="submit"]').length).toEqual(1);
  });
});

