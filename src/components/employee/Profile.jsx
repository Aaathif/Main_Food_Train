import React from 'react'
import css from './Profile.module.css'

function Profile() {
  return (
    <div className={css.container}>
      <div className={css.row}>
        <div className={css.col2}>
            <img src='https://www.techtrickseo.com/wp-content/uploads/2017/11/20369638_727832947404217_3701320580922365861_o.jpg' alt='' style={{width:'150px', height:'150px'}}/>
        </div>
        <div className={css.col2} style={{textAlign: 'left'}}>
            <h2>Name : Mrs. Sahla Purook</h2>
            <h3>Position: Toilet Cleaner</h3>
            <h2>Age: 23</h2>
        </div>
      </div>
    </div>
  )
}

export default Profile
