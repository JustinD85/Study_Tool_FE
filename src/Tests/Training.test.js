import React from 'react';
import Training from '../Components/Training';
import { shallow } from 'enzyme';

describe('<Training/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Training />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});