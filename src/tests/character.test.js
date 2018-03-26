import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from '../components/header';

describe('HeaderComponent', () => {

  it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderComponent/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render Header Component without throwing an error', () => {
    const wrapper = shallow(<HeaderComponent/>);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  })


})