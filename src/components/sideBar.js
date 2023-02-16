import React, { useState } from 'react'
import '../style/sideBar.css'
import sideBarImg from '../assets/sidebar.svg'

export const SideBar = (props) => {

  return (
    <div id='sideBar'>
      <img src={sideBarImg} alt="" />
      <ul>
        <li>
          <h3 className='numStep activeStep'>1</h3>

          <div className='txtStep'>
            <p>STEP 1</p>
            <h3>YOUR INFO</h3>
          </div>
        </li>

        <li>
          <div>
            <h3 className='numStep'>2</h3>
          </div>
          <div className='txtStep'>
            <p>STEP 2</p>
            <h3>SELECT PLAN</h3>
          </div>
        </li>

        <li>
          <div>
            <h3 className='numStep'>3</h3>
          </div>
          <div className='txtStep'>
            <p>STEP 3</p>
            <h3>ADD-ONS</h3>
          </div>
        </li>

        <li>
          <div>
            <h3 className='numStep'>4</h3>
          </div>
          <div className='txtStep'>
            <p>STEP 4</p>
            <h3>SUMMARY</h3>
          </div>
        </li>
      </ul>
    </div>
  )
}
