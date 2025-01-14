import React from 'react'

function toLocaleShort(date) {
  return new Date(date).toLocaleDateString("fa")
}

export default toLocaleShort
