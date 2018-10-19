import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavogationItems from './NavigationItems';
import NavogationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  it('should render two navigation items elements if not <NavigationItem /> elemetns if not authenticated', () => {
    const wrapper = shallow(<NavogationItems />);
    excpect(wrapper.find(NavogationItem)).toHaveLength(2);
  });
});