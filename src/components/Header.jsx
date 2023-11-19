import React from 'react'
import menu from '../bars.svg'

const Header = () => {
  return (
    <div className='container'>
      <div className='header-container'>
      <div className='empty1'></div>
      <div className='empty2'></div>
      <div className='empty3'></div>
        <h1>devjobs</h1>
        <img src={menu} alt="menu-icon" className='menuicon' />
      </div>
    </div>
  )
}

export default Header
