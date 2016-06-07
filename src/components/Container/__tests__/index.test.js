import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Container from './../';

describe('<Container />', () => {
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
