import React from 'react';
import Controller from '../Components/Controller';
import { shallow } from 'enzyme';

describe('<Controller/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controller />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});