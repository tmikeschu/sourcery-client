import React from 'react';
import ProductSearchItem from './ProductSearchItem';
import { shallow } from 'enzyme';
import { paths, productAddress } from '../../utils/static-data';

describe('<ProductSearchItem />', () => {
  it('renders without crashing', () => {
    const productSearchItem = shallow(<ProductSearchItem path={paths[productAddress][0]} />);
    expect(productSearchItem).toBeTruthy();
  });

  it('renders a product search item', () => {
    const productSearchItem = shallow(
      <ProductSearchItem path={paths[productAddress][0]} />
    );
    expect(productSearchItem.find('h4').length).toEqual(1);
    expect(productSearchItem.find('button').length).toEqual(1);
  });

  it('button responds to click event', () => {
    const handlePathViewClick = jest.fn();
    const productSearchItem = shallow(
      <ProductSearchItem path={paths[productAddress]} handlePathViewClick={handlePathViewClick}/>
    );
    const clickHandler = productSearchItem.instance().props.handlePathViewClick;
    expect(productSearchItem.find('button').length).toEqual(1);
    productSearchItem.find('button').simulate('click');
    expect(handlePathViewClick).toHaveBeenCalled();
  });
});
