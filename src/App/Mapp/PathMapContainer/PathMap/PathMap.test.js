import React from 'react';
import { shallow } from 'enzyme';
import PathMap from './PathMap';
import { GoogleMap, Polyline, Marker } from 'react-google-maps';
import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";
import { paths, productAddress } from '../../../utils/static-data';

describe('<PathMap />', () => {
  it('renders without crashing', () => {
    const pathMap = shallow(<PathMap paths={paths[productAddress]} />);
    expect(pathMap).toBeTruthy();
  });

  it('renders a ScriptjsLoader', () => {
    const pathMap = shallow(<PathMap paths={paths[productAddress]} />);
    expect(pathMap.find('ScriptjsLoader').length).toEqual(1);
  });
});


