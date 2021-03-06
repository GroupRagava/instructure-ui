/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

function focusable (element, isTabIndexNotNaN) {
  const nodeName = element.nodeName.toLowerCase()
  return (/input|select|textarea|button|object/.test(nodeName)
          ? !element.disabled
          : nodeName === 'a'
            ? element.href || isTabIndexNotNaN
            : isTabIndexNotNaN) && visible(element)
}

function hidden (el) {
  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) || el.style.display === 'none'
}

function visible (element) {
  /* eslint no-param-reassign:0 */
  while (element) {
    if (element === document.body) break
    if (hidden(element)) return false
    element = element.parentNode
  }
  return true
}

function tabbable (element) {
  let tabIndex = element.getAttribute('tabindex')
  if (tabIndex === null) tabIndex = undefined
  const isTabIndexNaN = isNaN(tabIndex)
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN)
}

export default function findTabbableDescendants (element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter((el) => tabbable(el))
}
