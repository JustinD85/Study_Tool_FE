import React from 'react';
import Profile from '../Components/Profile';
import { shallow } from 'enzyme';

describe('<Profile/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Profile />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});