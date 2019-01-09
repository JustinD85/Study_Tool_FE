import React from 'react';
import Profile from '../Components/Profile';
import { shallow } from 'enzyme';
import App from '../Components/App';
import { topics as a } from '../Data/js_fishing';
import user from './mockUser';

describe('<Profile/>', () => {
  let wrapper;
  let appWrapper = shallow(<App />);
  let topics = appWrapper.instance().convertObjectToMap(a);

  beforeEach(() => {
    wrapper = shallow(
      <Profile info={{ ...user, topics }}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});