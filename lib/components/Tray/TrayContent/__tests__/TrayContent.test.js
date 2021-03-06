import React from 'react'

import TrayContent from '../index'

import styles from '../styles.css'

describe('<TrayContent />', function () {
  const testbed = new Testbed(<TrayContent />)

  it('should render', function () {
    const subject = testbed.render({
      isOpen: true,
      placement: 'left'
    })
    expect(subject.dom().className).to.include(styles['placement--left'])
  })

  it('should not have a close button', function () {
    const subject = testbed.render({
      isOpen: true,
      placement: 'left'
    })
    expect(subject.find('button').length).to.equal(0)
  })

  describe('when isDismissable is true', function () {
    it('should have a close button', function () {
      const subject = testbed.render({
        isDismissable: true,
        isOpen: true,
        placement: 'left'
      })

      expect(subject.find('button').length).to.equal(1)
    })

    it('should call `onClose` when the close button is clicked', () => {
      const closeStub = testbed.sandbox.stub()
      const subject = testbed.render({
        isOpen: true,
        isDismissable: true,
        onClose: closeStub,
        placement: 'left'
      })
      subject.find('button').trigger('click')
      expect(closeStub.called).to.be.true
    })
  })
})
