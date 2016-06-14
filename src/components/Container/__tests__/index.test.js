import React from 'react';
import { renderToString } from 'react-dom/server';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Container from './../';

describe('<Container />', () => {
  it('renders on server', () => {
    const wrapper = (
      <Container>
        <div className="unique" />
      </Container>
    );

    expect(() => renderToString(wrapper)).to.not.throw(ReferenceError);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Container>
        <div className="unique" />
      </Container>
    );

    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('adds className when passed in', () => {
    const wrapper = shallow(
      <Container className="test" />
    );

    expect(wrapper).to.have.className('test');
  });
});
