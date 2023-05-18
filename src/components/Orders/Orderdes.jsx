import React from 'react'
import css from './Orders.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";


function Orderdes({ Orderdata }) {

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();
  console.log(items+"sathurjan");

  // if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className={css.container}>
      <div className={css.row}>
      
        <div className={css.colum}>
          <h3>REMOVE</h3>
        </div>

        <div className={css.colum}>
          <h3 >IMAGE</h3>

        </div>

        <div className={css.colum}>
          <h3 >PRODUCT</h3>

        </div>

        <div className={css.colum}>
          <h3 >PRICE</h3>

        </div>

        <div className={css.colum}>
          <h3 >Per QUANTITY</h3>

        </div>

        <div className={css.colum}>
          <h3 >QUANTITY</h3>

        </div>

      </div>
      <hr />
      {items.map((Orderdata) => (
          <div className={css.row}>
          <div className={css.colum}>
            {/* <img src={Orderdata.closebtn} style={{ height: '10px', width: '10px' }} alt="cxsvcxs"  /> */}
            <DeleteIcon style={{ color: "red", fontSize: "30px" }} />
  
          </div>
  
          <div className={css.colum}>
            <img src={Orderdata.photos} style={{ height: '80px', width: '80px', borderRadius: "20px" }} alt="" />
          </div>
  
          <div className={css.colum}>
            <p>{Orderdata.title}</p>
          </div>
  
          <div className={css.colum}>
            {/* <p>{Orderdata.pprice}</p> */}
            price
          </div>
  
          <div className={css.colum}>
            {/* <p>{Orderdata.pquantity}</p> */}
            quanity
          </div>
  
          <div className={css.colum}>
            {/* <p>{Orderdata.psubtotal}</p> */}
            total
          </div>
  
        </div>
      ))}
      
      <hr />

      <div className={css.row}>
        <div className={css.colum2}>

          <h3 className={css.textcenter}>APPLY COUPON</h3>
          <br />
          <span>
            <textarea className={css.textarea}> </textarea>
            <button className={css.btn}>ADD</button>
          </span>
        </div>


        <div className={css.colum2}>
          <div className={css.element}>
            <div className={css.element1}>
              <p className={css.text}>CART TOTALS</p>

              <div className={css.colum3}>

                <p className={css.text1}>Order_Value</p>
                <br />

                <p className={css.text2}>Shipping</p>
                <br />
                <p className={css.text3}>Total</p>
                <Link to='/payment'>
                  <button className={css.btn2}>CONTINUE TO CHECKOUT</button>
                </Link>

              </div>
            </div>


          </div>
        </div>

      </div>
    </div>


  )
}

export default Orderdes
