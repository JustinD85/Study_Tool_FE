import React from 'react';
import Menu from '../Components/Menu';
import { shallow } from 'enzyme';
import user from './mockUser'

describe('<Menu/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Menu user={user}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});