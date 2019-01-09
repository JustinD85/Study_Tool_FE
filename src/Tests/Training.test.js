import React from 'react';
import Training from '../Components/Training';
import { shallow } from 'enzyme';
import App from '../Components/App';
import { topics as a } from '../Data/js_fishing';
import user from './mockUser';

describe('<Training/>', () => {
  let wrapper;
  let appWrapper = shallow(<App />);
  let topics = appWrapper.instance().convertObjectToMap(a);

  beforeEach(() => {
    wrapper = shallow(
      <Training info={{ user, topics }} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should convert word to readable text', () => {
    let newWord = wrapper.instance().toLowerCase('not my apples');
    expect(newWord).toEqual('not_my_apples');
  });

  it('should show the selected word', () => {
    wrapper.instance().handleSelectWord('var');
    expect(wrapper.state('currentWord')).not.toEqual(null);
  })
});