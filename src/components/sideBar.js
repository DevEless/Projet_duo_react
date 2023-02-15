import React, { useState } from 'react'

export const SideBar = () => {
  const [liTxt , setLiTxt] = useState("YOUR INFO");

  // function getLiTxt(e) {
  //   setLiTxt(
  //     e.target.textContent
  //   )
  // }
  
  return (
    <div>
        <ul>
          <li>YOUR INFO</li>
          <li>SELECT PLAN</li>
          <li>ADD-ONS</li>
          <li>SUMMARY</li>
        </ul>
    </div>
  )
}
