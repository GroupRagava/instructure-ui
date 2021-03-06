import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import themeable from '../../../util/themeable'

import styles from './styles.css'
import theme from './theme.js'

@themeable(theme, styles)
export default class RadioInputFacade extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    context: PropTypes.oneOf(['success', 'warning', 'danger', 'off']),
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['simple', 'toggle'])
  }

  static defaultProps = {
    variant: 'simple',
    checked: false,
    focused: false,
    hovered: false,
    size: 'medium'
  }

  render () {
    const {
      variant,
      size,
      checked,
      focused,
      hovered,
      context
    } = this.props

    const classes = {
      [styles.root]: true,
      [styles[variant]]: true,
      [styles[context]]: variant === 'toggle',
      [styles.checked]: checked,
      [styles.focused]: focused,
      [styles.hovered]: hovered,
      [styles[size]]: true
    }

    return (
      <span className={classnames(classes)}>
        <span className={styles.facade} aria-hidden="true" />
        <span className={styles.label}>
          {this.props.children}
        </span>
      </span>
    )
  }
}
