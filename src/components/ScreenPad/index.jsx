import React from 'react'
import PropTypes from 'prop-types'
import "./ScreenPad.scss"

export const ScreenPad = ({input = 0}) => {
  return (
    <div className='ScreenPad'>
      <p>{input}</p>
    </div>
  )
}

ScreenPad.propTypes = {}
