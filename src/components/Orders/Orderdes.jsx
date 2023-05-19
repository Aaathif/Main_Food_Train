import React, { useRef } from 'react';
import css from './Orders.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
// import { CartProvider, useCart } from "react-use-cart";


import { useStateContext } from '../../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';


function Orderdes({ Orderdata }) {

  const cartRef = useRef();
  const { totalPrice, totalQuantities, qty, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  return (
    <div className={css.container}>
      {cartItems.length < 1 && (
        <div className="empty-cart">
          <AiOutlineShopping size={150} />
          <h3>Your shopping bag is empty</h3>
          <Link to="/product">
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className={css.btnCartCancel}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {cartItems.length >= 1 && (
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
            <h3 >QUANTITY</h3>

          </div>

          {/* <div className={css.colum}>
          <h3 >Per QUANTITY</h3>

        </div> */}

          <div className={css.colum}>
            <h3 >PRICE</h3>

          </div>

        </div>)}
      {cartItems.length >= 1 && (
        <hr />)}


      {cartItems.length >= 1 && cartItems.map((Orderdata) => (

        <div className={css.row} ref={cartRef}>
          <div className={css.colum}>
            <DeleteIcon onClick={() => onRemove(Orderdata)} style={{ color: "red", fontSize: "30px" }} />
          </div>

          <div className={css.colum}>
            <img src={Orderdata.photos} style={{ height: '80px', width: '80px', borderRadius: "20px" }} alt="" />
          </div>

          <div className={css.colum}>
            <p>{Orderdata.title}</p>
          </div>

          <div className={css.colum}>
            {/* <p>{qty}</p> */}
            <p className={css.quantityDesc}>
              <span className={css.minus} onClick={() => toggleCartItemQuanitity(Orderdata._id, 'dec')}>
                <AiOutlineMinus />
              </span>
              <span className={css.num} onClick="">{totalQuantities}</span>
              <span className={css.plus} onClick={() => toggleCartItemQuanitity(Orderdata._id, 'inc')}><AiOutlinePlus /></span>
            </p>

          </div>

          {/* <div className={css.colum}>
            <p>{Orderdata.pquantity}</p>
            quanity
          </div> */}

          <div className={css.colum}>
            {/* <p>{Orderdata.psubtotal}</p> */}
            total
          </div>

        </div>
      ))}
      {cartItems.length >= 1 && (
        <hr />)}
      {cartItems.length >= 1 && (
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
{/* 
                  <p className={css.text1}>Order_Value</p>
                  <br />

                  <p className={css.text2}>Shipping</p>
                  <br /> */}
                  <p className={css.text3}>Total: Rs.{totalPrice}</p>
                  <Link to='/stripe' state={totalPrice}>
                    <button className={css.btn2}>CONTINUE TO CHECKOUT</button>
                  </Link>

                </div>
              </div>
            </div>
          </div>

        </div>)}
    </div>


  )
}

export default Orderdes
