import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Item from './../';

describe('<Item />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Item>
        <div className="unique" />
      </Item>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('adds className when passed in', () => {
    const wrapper = shallow(
      <Item className="test" />
    );

    expect(wrapper).to.have.className('test');
  });
});
