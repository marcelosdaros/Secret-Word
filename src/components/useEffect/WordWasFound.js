import React, { useEffect } from 'react'

const WordWasFound = ({ letters }) => {

  useEffect(() => {
    if (letters.filter((letter) => letter !== "-1").length === 0) {
      return true
    }
    return false
  }, letters)

  return (
    useEffect()
  )
}

export default WordWasFound