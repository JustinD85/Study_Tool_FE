import React from 'react';
import Login from './';
import {shallow} from 'enzyme';

describe('<Login />', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <Login/>);
  });

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });


})
