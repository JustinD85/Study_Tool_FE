import React from 'react';
import LoginIcon from '../Components/LoginIcon';
import { shallow } from 'enzyme';

describe('<LoginIcon/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LoginIcon person={{firstName:'J', email:'e'}} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});