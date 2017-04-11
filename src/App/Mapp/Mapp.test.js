import React from 'react';
import { shallow } from 'enzyme';
import Mapp from './Mapp';
import PathMapContainer from './PathMapContainer/PathMapContainer';

describe('<Map />', () => {
  it('renders without crashing', () => {
    const map = shallow(<Mapp />);
    expect(map).toBeTruthy();
  });

  it('renders a PathMapContainer child', () => {
    const map = shallow(<Mapp paths={[[1]]} />);
    expect(map.find(PathMapContainer).prop('paths')).toEqual([[1]]);
  });
});

