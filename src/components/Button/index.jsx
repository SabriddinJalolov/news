import React from 'react'
import './MyButton.scss'

const MyButton = ({isRounded, bgColor, children, ...args }) => {
  return (
    <button className={`myButton ${isRounded ? 'BTNrounded' : ''}`} style={{backgroundColor: `${bgColor}`}} {...args}>{children}</button>
  )
}

export default MyButton
