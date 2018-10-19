import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavogationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render two navigation items elements <NavigationItem /> elemetns if not authenticated', () => {
    expect(wrapper.find(NavogationItem)).toHaveLength(2);
  });

  it('should render three navigation items elements <NavigationItem /> elemetns if authenticated', () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavogationItem)).toHaveLength(3);
  });

  it('should na exact logout button', () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.contains(<NavogationItem link="/logout">Logout</NavogationItem>)).toEqual(true);
  });
});