import React from 'react';
import ToggleDefinition from '../Components/ToggleDefinition';
import { shallow } from 'enzyme';

describe('<ToggleDefinition/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ToggleDefinition />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});