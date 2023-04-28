import React from 'react'
import css from './Sidebar.module.css'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <div className={css.containor}>
        <ul >
          <b>
          
            <li>
            <Link to="" style={{textDecoration:"none"}}>
            PROFILE
            </Link>
            </li>
          
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            ATTANDENCE
          </li>
          </Link>
          <Link to="/leaveform" style={{textDecoration:"none"}}>
          <li>
            APPLY LEAVE
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            PAYROLL SLIP
          </li>
          </Link>
          </b>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar