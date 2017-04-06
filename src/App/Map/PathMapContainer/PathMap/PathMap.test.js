import React from 'react';
import { shallow } from 'enzyme';
import PathMap from './PathMap';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
import { paths, productAddress } from '../../../utils/static-data';

describe('<PathMap />', () => {
  it('renders without crashing', () => {
    const pathMap = shallow(<PathMap paths={paths[productAddress]} />);
    expect(pathMap).toBeTruthy();
  });

  it('renders a GoogleMapLoader', () => {
    const pathMap = shallow(<PathMap paths={paths[productAddress]} />);
    expect(pathMap.find('GoogleMapLoader').length).toEqual(1);
  });
  
  describe('<GoogleMapLoader />', () => {
    it('renders a googlemap element', () => {
      const googleMapLoader = shallow(
        <GoogleMapLoader 
          containerElement={"<div></div>"} 
          googleMapElement={<GoogleMap />} 
        />
      );
      expect(googleMapLoader).toBeTruthy();
    });
  });
});


