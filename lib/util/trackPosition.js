/**
 * Track the position of an element by being notified when it's position changes.
 * This uses requestAnimationFrame and getBoundingClientRect to detect changes.
 * Callback function will be invoked whenever the position has changed and will
 * supply the current coordinates of the element.
 *
 * Example:
 *
 *  let cancel = trackPosition(document.querySelector('button'), (coords) => {
 *    console.log(coords)
 *    cancel()
 *  })
 *
 * @param {Element} el The element to track
 * @param {Function} cb The callback function
 * @return {Function} A function to cancel tracking
 */
export default function trackPosition (el, cb) {
  let coords = el.getBoundingClientRect()
  let cancelled = false

  function tick () {
    // If cancelled stop tracking
    if (cancelled) {
      return
    }

    // Callback if coords have changed
    const temp = el.getBoundingClientRect()

    if (temp.top !== coords.top ||
        temp.left !== coords.left ||
        temp.right !== coords.right ||
        temp.bottom !== coords.bottom) {
      cb(temp)
    }

    // Update coords
    coords = temp

    // Schedule another tick
    requestAnimationFrame(tick)
  }

  // Schedule first tick
  requestAnimationFrame(tick)

  // Provide a way to cancel tracking
  return function () {
    cancelled = true
  }
}

