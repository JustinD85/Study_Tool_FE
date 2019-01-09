import React from 'react';
import CreateUser from '../Components/CreateUser';
import { shallow } from 'enzyme';

describe('<CreateUser/>', () => {
  let wrapper;
  let handleCreateUserMock = jest.fn();
  let handleChangeViewMock = jest.fn();
  let event = {
    target: {
      innerText: "Back"
    },
    preventDefault: () => { }
  }
  beforeEach(() => {
    wrapper = shallow(
      <CreateUser
        handleChangeView={handleChangeViewMock}
        handleCreateUser={handleCreateUserMock}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to go back to login screen', () => {
    
    wrapper.instance().handleSubmit(event);
    expect(handleChangeViewMock).toHaveBeenCalled();
  });

  it('should be able to create User', () => {
    event.target.innerText = "";
    wrapper.instance().handleSubmit(event);
    expect(handleCreateUserMock).toHaveBeenCalled();
  });

  it('should track user form data entry', () => {
    expect(wrapper.state('firstName')).toEqual('');
    wrapper.instance().handleChange({ target: { name: 'firstName', value: 'Justin' } }  );
    expect(wrapper.state('firstName')).toEqual('Justin');
  })
});