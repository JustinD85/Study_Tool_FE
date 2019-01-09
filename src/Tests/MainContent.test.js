import React from 'react';
import MainContent from '../Components/MainContent';
import { shallow } from 'enzyme';

describe('<MainContent/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MainContent />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});