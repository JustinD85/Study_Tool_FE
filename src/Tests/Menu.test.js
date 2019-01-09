import React from 'react';
import Menu from '../Components/Menu';
import { shallow } from 'enzyme';

describe('<Menu/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Menu />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});