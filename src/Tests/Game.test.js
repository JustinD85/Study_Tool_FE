import React from 'react';
import Game from '../Components/Game';
import { shallow } from 'enzyme';

describe('<Game/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Game />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});