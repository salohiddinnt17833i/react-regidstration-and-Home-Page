import { FaBarsStaggered } from "react-icons/fa6";
import React from 'react'
import style from './all.module.css'
function Navbar() {
  return (
    <div>
      <div>
        <button className={style.Logobtn} type='button'>C</button>
        <FaBarsStaggered className={style.bar} />
      </div>
    </div>
  )
}

export default Navbar