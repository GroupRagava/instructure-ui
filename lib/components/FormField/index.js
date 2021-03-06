import React, { Component, PropTypes } from 'react'
import CustomPropTypes from '../../util/CustomPropTypes'
import classnames from 'classnames'
import themeable from '../../util/themeable'
import FormFieldLabel from './FormFieldLabel'
import FormFieldMessages from './FormFieldMessages'

import styles from './styles.css'

/**
  This is a helper component that is used by most of the custom form
  components. In most cases it shouldn't be used directly.

  ```jsx_example
  <FormField id="foo" label="Enter a number">
    <input type="number"/>
  </FormField>
  ```
**/
@themeable(null, styles)
class FormField extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    /**
    * object with shape: `{
    * text: PropTypes.string,
    * type: PropTypes.oneOf(['error', 'hint', 'success', 'screenreader-only'])
    *   }`
    */
    messages: PropTypes.arrayOf(CustomPropTypes.formFieldMessage),
    children: PropTypes.node,
    isBlock: PropTypes.bool
  }

  static defaultProps = {
    isBlock: true
  }

  render () {
    const classes = {
      [styles.root]: true,
      [styles['is-block']]: this.props.isBlock
    }
    return (
      <label className={classnames(classes)} htmlFor={this.props.id}>
        <FormFieldLabel>{this.props.label}</FormFieldLabel>
        {this.props.children}
        <FormFieldMessages messages={this.props.messages} />
      </label>
    )
  }
}

export default FormField
export { default as FormFieldLabel } from './FormFieldLabel'
export { default as FormFieldMessage } from './FormFieldMessage'
export { default as FormFieldMessages } from './FormFieldMessages'
