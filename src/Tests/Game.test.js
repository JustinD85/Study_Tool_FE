import React from 'react';
import Game from '../Components/Game';
import { shallow } from 'enzyme';
import user from './mockUser';
import App from '../Components/App';
import { topics as a } from '../Data/js_fishing';

describe('<Game/>', () => {
  let wrapper;
  let appWrapper = shallow(<App />)
  let topics = appWrapper.instance().convertObjectToMap(a);
  let handleSaveToStorage = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Game info={{ ...user, topics, handleSaveToStorage }} />
    );
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to randomize numbers', () => {
    expect(wrapper.instance().randNumGen(10000000)).not.toEqual(10000000);
  });

  it('should select a topic', () => {
    // expect(wrapper.state('currentTopic')).toEqual(null);
    wrapper.instance().selectTopic();
    expect(wrapper.state('currentTopic')).not.toEqual(null);
  });

  it('should set fishWords', () => {
    // expect(wrapper.state('fishWords')).toEqual([]);
    // wrapper.instance().selectTopic(); // runs setFishWords, but to be explicit...
    wrapper.instance().setFishWords();
    expect(wrapper.state('fishWords').length).toEqual(4);
  });

  it('should be able to decrement points', () => {
    expect(wrapper.state('wordWorth')).toEqual(100);
    wrapper.instance().decrementPoints();
    expect(wrapper.state('wordWorth')).toEqual(96);
  });

  it('should be able to set user score', () => {
    let e = { target: { closest: () => { return { dataset: { id: 'var' } } } } };
    wrapper.instance().setUserScore(e);
    // expect(wrapper.props.info.user.score).not.toEqual(null);
  });
  
  it('should be able to increment user score', () => {
    wrapper.setState({ 'currentWord': 'javascript' })
    let e = { target: { closest: () => { return { dataset: { id: 'var' } } } } };
    wrapper.instance().setUserScore(e);
    // expect(wrapper.props.info.user.score).not.toEqual(null);
  });

  
});