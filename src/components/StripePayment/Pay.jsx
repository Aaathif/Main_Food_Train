import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import css from '../Orders/Orders.module.css'

const KEY = "pk_test_51Mwf3uKEYjNNAooHWb7CTIdxZ1loOGVE4csNTaJFZUd0wm7Sbze4jzTkKcMn4o7urxxRdkiM7cqc53y0LtKHs2od00OrXGXOC0"
const Pay = () => {

  const location = useLocation()
  const price1 = location.state

  const [stripeToke, serStripeToken] = useState(null)

  const onToken = (token) => {
    serStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {

      try {
        const res = await axios.post("http://localhost:8000/api/checkout/stripe", {
          tokenId: stripeToke.id,
          price: 2000,
          email: stripeToke.email,
          card: stripeToke.card,



        }

        );

        console.log(res.data)

      } catch (err) {
        console.log(err);
      }
    };

    if (stripeToke) {
      makeRequest();
    }

  }, [stripeToke]);

  return (

    <div
      style={{
        // height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",


      }}
    >

      <div className={css.colum2}>
        <div className={css.element}>
          <div className={css.element1}>
            <p className={css.text}>Pay Using Card</p>

            <div className={css.colum3}>
              {/* 
                  <p className={css.text1}>Order_Value</p>
                  <br />

                  <p className={css.text2}>Shipping</p>
                  <br /> */}
              <p className={css.text3}>Total: Rs.{price1}</p>
              <Link to="/afterPay">
              <StripeCheckout name="FOOD TRAIN"
                // billingAddress
                // shippingAddress
                description={price1}
                amount={2000}
                token={onToken}
                stripeKey={KEY}
              >
               
                <button
                 className={css.btn2}
                >pay Now
                </button>  
              </StripeCheckout></Link> 

            </div>
          </div>
        </div>
      </div>


    </div>

  );

};

export default Pay;