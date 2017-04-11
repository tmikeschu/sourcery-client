import React from 'react';
import { shallow } from 'enzyme';
import PathMapContainer from './PathMapContainer';
import PathMap from './PathMap/PathMap';

describe('<PathMapContainer />', () => {
  it('renders without crashing', () => {
    const mapContainer = shallow(<PathMapContainer />);
    expect(mapContainer).toBeTruthy();
  });

  it('renders a single PathMap child', () => {
    const mapContainer = shallow(<PathMapContainer paths={[[1]]} />);
    const mapCenter = {
      lat: 14.2499821,
      lng: 1.6302113
    };

    expect(mapContainer.children().length).toEqual(1);
    expect(mapContainer.children()['node']['type']).toEqual(PathMap)
    expect(mapContainer.find(PathMap).prop('paths')).toEqual([[1]]);
    expect(mapContainer.find(PathMap).prop('zoom')).toEqual(2);
    expect(mapContainer.find(PathMap).prop('center')).toEqual(mapCenter);
  });
});

