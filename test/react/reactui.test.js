'use strict'
import React from 'react'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import Demo from '../../src/react/reactui'

configure({ adapter: new Adapter() })

describe('UI test #demo', () => {
  it('should have title', () => {
    const wrapper = mount(<Demo />)
    const title = wrapper.find('h1')
    expect(title).toHaveLength(1)
    expect(title.text()).toBe('This is a demo')
  })

  it('shold add 1 when click button', () => {
    const wrapper = mount(<Demo />)
    const counter = wrapper.find('.counter')
    const v1 = parseInt(counter.text())
    wrapper.find('button').simulate('click')
    const v2 = parseInt(counter.text())
    expect(v2).toBe(v1 + 1)
  })

  it('should change when input number', () => {
    const wrapper = mount(<Demo />)
    const counter = wrapper.find('.counter')
    wrapper.find('input').simulate('change', {
      target: {
        value: '5'
      }
    })

    expect(counter.text()).toBe('5')
  })

  it('should change when props change', () => {
    const wrapper = mount(<Demo title="Demo" value={5} />)
    sinon.spy(Demo, 'getDerivedStateFromProps')
    const title = wrapper.find('h1')
    wrapper.setProps({
      title: 'Demo2'
    })
    expect(title.text()).toBe('Demo2')
    const callCount = Demo.getDerivedStateFromProps.callCount
    expect(callCount).toBe(1)
  })
})
