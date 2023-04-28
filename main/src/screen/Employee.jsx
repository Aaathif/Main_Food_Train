import React from 'react'
import Navbar from '../components/employee/Navbar'
import Sidebar from '../components/employee/Sidebar'
import css from '../components/employee/Sidebar.module.css'
import Profile from '../components/employee/Profile'

function Employee() {
  return (
    <div>
      <Navbar/>
        <div className={css.row}>
            <div className={css.col1}>
                <Sidebar/>
            </div>
            <div className={css.col2}>
                <Profile />
            </div>
        </div>
      
    </div>
  )
}

export default Employee
