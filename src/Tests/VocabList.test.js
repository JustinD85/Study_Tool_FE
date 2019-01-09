import React from 'react';
import VocabList from '../Components/VocabList';
import { shallow } from 'enzyme';

describe('<VocabList/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <VocabList />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});