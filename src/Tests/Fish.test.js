import React from 'react';
import Fish from '../Components/Fish';
import { shallow } from 'enzyme';

describe('<Fish/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Fish />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});