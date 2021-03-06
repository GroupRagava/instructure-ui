import React, { Component, PropTypes } from 'react'
import themeable from '../../../util/themeable'
import classnames from 'classnames'

import styles from './styles.css'
import theme from './theme.js'

/**
  This is a helper component that is used by most of the custom form
  components. In most cases it shouldn't be used directly.

  ```jsx_example
  <FormFieldMessage variant="error">Invalid value</FormFieldMessage>
  ```
**/
@themeable(theme, styles)
export default class FormFieldMessage extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['error', 'hint', 'success', 'screenreader-only']),
    children: PropTypes.node
  }

  static defaultProps = {
    variant: 'hint'
  }

  render () {
    const classes = {
      [styles.root]: true,
      [styles[this.props.variant]]: true
    }
    return (
      <div className={classnames(classes)}>
        {this.props.children}
      </div>
    )
  }
}
