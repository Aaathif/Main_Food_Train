import React from 'react'
import css from '../Orders/Orders.module.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'

function AfterPay() {
  return (
    <div>
        <Navbar/>
      <div className={css.colum2}>
            <div className={css.element}>
             
                <div className={css.colum3}>
                  <Link to='/delivery'>
                    <button className={css.btn2} style={{width:"200px"}}>CONTINUE TO SHIPPING</button>
                  </Link>

                </div>
            </div>
          </div>
        <Footer />
    </div>
  )
}

export default AfterPay
