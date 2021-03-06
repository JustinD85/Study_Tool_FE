import React from 'react';
import Topics from '../Components/Topics';
import { shallow } from 'enzyme';

describe('<Topics/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Topics topics={new Map()} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});