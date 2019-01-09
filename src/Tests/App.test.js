import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { shallow } from 'enzyme';
import topics from '../Data/js_fishing';
global.localStorage = require('../setupTests')

describe('<App/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('state should not be null', () => {
    expect(wrapper.state()).not.toBeNull();
  });

  it('should render login component', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('should set state from sources', () => {
    wrapper.instance().convertObjectToMap(topics);
    expect(wrapper.state('topics')).not.toBeNull();
  })

  it('should be able to create a new User', () => {
    wrapper.instance().handleCreateUser({ name: "pass" });
    expect(wrapper.state('users')).toEqual({ name: "pass" });
    expect(wrapper.find('Login')).not.toBeNull();
  });

  it('should be able go to create user screen', () => {
    wrapper.instance().handleNewUser();
    expect(wrapper.state('userStatus')).toEqual('createUser');
    expect(wrapper.find('CreateUser')).not.toBeNull();
  });

  it('should allow user to login', () => {
    wrapper.instance().handleLogin('me@me.com');
    expect(wrapper.state('currentUser')).toEqual('me@me.com');
    expect(wrapper.find('mainContent')).not.toBeNull();
  });

  it('should be able to track where the user is', () => {
    wrapper.instance().handleChangeView('newStatus');
    expect(wrapper.state('userStatus')).toEqual('newStatus');
  });

  it('should be able to change user status', () => {
    wrapper.instance().handleChangeView('mainContent');
    expect(wrapper.instance().changeUserStatus()).not.toBeNull();
  });

  it('should be able to save to local storage', () => {
    wrapper.instance().saveToStorage()
  });

  it('should show loading screen if no topics', () => {
    wrapper.setState({ 'topics': null })
    expect(wrapper.find('.loading')).not.toBeNull();
  })
});
