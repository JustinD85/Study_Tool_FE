import React from 'react';
import VocabList from '../Components/VocabList';
import { shallow } from 'enzyme';
import Topics from '../Components/Topics';
import App from '../Components/App';
import { topics as a } from '../Data/js_fishing';
import user from './mockUser';

describe('<VocabList/>', () => {
  let wrapper;
  let appWrapper = shallow(<App />);

  let topics = appWrapper.instance().convertObjectToMap(a);

  beforeEach(() => {
    wrapper = shallow(
      <VocabList currentTopic={'javascript'} topics={topics} user={user.user}  />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});