import React from 'react'
import Popover, { PopoverTrigger, PopoverContent } from '../index'
import Button from '../../Button'
import Heading from '../../Heading'

describe('<Popover />', () => {
  const testbed = new Testbed(
    <Popover>
      <PopoverTrigger><Button>Click Me</Button></PopoverTrigger>
      <PopoverContent>
        <Heading>Hello</Heading>
      </PopoverContent>
    </Popover>
  )

  it('should render', () => {
    const subject = testbed.render()

    expect(subject).to.be.present
  })

  it('should toggle show state on focus', () => {
    const subject = testbed.render()

    subject.trigger('focus')

    const {
      _content,
      _node
    } = subject.unwrap()

    expect(_content.props.show).to.be.true
    expect(_node.props.show).to.be.true
  })

  it('should not show by default', function () {
    const subject = testbed.render()

    expect(subject.unwrap().show).to.be.false
  })

  it('should accept a default show', function () {
    const onToggle = testbed.sandbox.stub()
    const subject = testbed.render({
      show: true,
      onToggle
    })

    expect(subject.unwrap().show).to.be.true
  })

  it('should call onToggle on focus', () => {
    const onToggle = testbed.sandbox.stub()
    const subject = testbed.render({
      onToggle
    })
    subject.trigger('focus')

    expect(onToggle).to.have.been.called
  })

  it('should call onToggle on blur', () => {
    const onToggle = testbed.sandbox.stub()
    const subject = testbed.render({
      onToggle
    })
    subject.trigger('focus')
    subject.trigger('blur')

    expect(onToggle).to.have.been.called
  })

  it('should not allow on click by default', () => {
    const onToggle = testbed.sandbox.stub()
    const subject = testbed.render({
      onToggle
    })
    subject.trigger('click')

    expect(onToggle).not.to.have.been.called
  })

  it('should allow onClick if provided as prop', () => {
    const onToggle = testbed.sandbox.stub()
    const subject = testbed.render({
      on: 'click',
      onToggle
    })
    subject.trigger('click')

    expect(onToggle).to.have.been.called
  })

  describe('for a11y', () => {
    it('should meet standards', function (done) {
      const subject = testbed.render()

      subject.should.be.accessible(done)
    })
  })
})
