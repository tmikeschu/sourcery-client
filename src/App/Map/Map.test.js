import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';
import PathMapContainer from './PathMapContainer/PathMapContainer';

describe('<Map />', () => {
  it('renders without crashing', () => {
    const map = shallow(<Map />);
    expect(map).toBeTruthy();
  });

  it('renders a PathMapContainer child', () => {
    const map = shallow(<Map paths={[[1]]} />);
    expect(map.find(PathMapContainer).prop('paths')).toEqual([[1]]);
  });
});

