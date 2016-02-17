import React from 'react'
import placeholderImage from 'mocks/util/placeholder-image'
import avatarImage from 'mocks/images/placeholder-avatar.png'
import faker from 'faker'

export default function (components) {
  // These need to be globals to render examples
  global['placeholderImage'] = placeholderImage
  global['avatarImage'] = avatarImage
  global.React = React
  global.faker = faker
  components.forEach((component) => {
    global[component.name] = component.module
  })
}