import React from 'react'
import menu from '../bars.svg'

const Header = () => {
  return (
    <div className='container'>
      <div className='header-container'>
      <div className='empty1'><svg width="455" height="95" viewBox="0 0 455 95" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.0813802" fill-rule="evenodd" clip-rule="evenodd" d="M1.10464 -326.552C-2.09044 -357.218 30.9297 -378.979 60.4543 -365.665L430.336 -198.867C459.78 -185.59 463.666 -147.365 437.337 -130.014L107.483 87.3663C81.1532 104.718 44.3185 88.2072 41.1322 57.6251L1.10464 -326.552Z" fill="white"/>
</svg></div>
      <div className='empty2'><svg width="477" height="160" viewBox="0 0 477 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.0813802" fill-rule="evenodd" clip-rule="evenodd" d="M283.186 -209.219C304.656 -232.14 342.561 -224.557 352.27 -195.399L474.879 172.847C484.818 202.698 457.875 232.633 426.684 226.393L32.9246 147.62C1.73368 141.381 -9.94404 103.72 12.036 80.2541L283.186 -209.219Z" fill="white"/>
</svg></div>
      <div className='empty3'><svg width="288" height="135" viewBox="0 0 288 135" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.0813802" fill-rule="evenodd" clip-rule="evenodd" d="M-166.27 43.4477C-169.465 12.782 -136.445 -8.97891 -106.921 4.33516L262.961 171.133C292.405 184.41 296.291 222.635 269.962 239.986L-59.8921 457.366C-86.2218 474.718 -123.056 458.207 -126.243 427.625L-166.27 43.4477Z" fill="white"/>
</svg></div>
        <h1>devjobs</h1>
        <img src={menu} alt="menu-icon" className='menuicon' />
      </div>
    </div>
  )
}

export default Header
