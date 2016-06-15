import React from 'react';
import { renderToString } from 'react-dom/server';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Component from './../';

describe('<Component />', () => {
  it('renders on server', () => {
    const wrapper = (
      <Component>
        <div className="unique" />
      </Component>
    );

    expect(() => renderToString(wrapper)).to.not.throw(ReferenceError);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Component>
        <div className="unique" />
      </Component>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('adds className when passed in', () => {
    const wrapper = shallow(
      <Component className="test" />
    );

    expect(wrapper).to.have.className('test');
  });
});
