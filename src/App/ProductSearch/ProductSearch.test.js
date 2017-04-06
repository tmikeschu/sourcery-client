import React from 'react';
import ProductSearch from './ProductSearch';
import ProductSearchItem from './ProductSearchItem/ProductSearchItem';
import { shallow } from 'enzyme';
import { paths, productAddress } from '../utils/static-data';

describe('<ProductSearch />', () => {
  it('renders without crashing', () => {
    const productSearch = shallow(<ProductSearch paths={paths[productAddress]} />);
    expect(productSearch).toBeTruthy();
  });

  it('renders a product search section', () => {
    const productSearch = shallow(<ProductSearch paths={paths[productAddress]} />);
    const searchItems = productSearch.instance().props.paths.map((path, i) => 
      <ProductSearchItem path={path} key={i} />
    )
    expect(productSearch.find('h3').length).toEqual(1);
    expect(productSearch.find('input[type="text"]').length).toEqual(1);
    expect(productSearch.find('input[type="submit"]').length).toEqual(1);
    expect(productSearch.find('ul').length).toEqual(1);
    expect(productSearch.find('button').length).toEqual(1);
    expect(productSearch.find(ProductSearchItem).length).toEqual(3);
  });

  it('View All responds to a click event', () => {
    const viewAllPaths = jest.fn();
    const productSearch = shallow(
      <ProductSearch paths={paths[productAddress][0]} viewAllPaths={viewAllPaths}/>
    );
    const clickHandler = productSearch.instance().props.viewAllPaths;
    expect(productSearch.find('button').length).toEqual(1);
    productSearch.find('button').simulate('click');
    expect(viewAllPaths).toHaveBeenCalled();
  });
});
