import React from 'react';
import CreateUser from '../Components/CreateUser';
import { shallow } from 'enzyme';

describe('<CreateUser/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CreateUser />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});