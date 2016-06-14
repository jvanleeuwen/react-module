import React from 'react';
import { renderToString } from 'react-dom/server';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Item from './../';

describe('<Item />', () => {
  it('renders on server', () => {
    const wrapper = (
      <Item>
        <div className="unique" />
      </Item>
    );

    expect(() => renderToString(wrapper)).to.not.throw(ReferenceError);
  });

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
