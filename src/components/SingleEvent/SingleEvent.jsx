import React from 'react'
import css from './SingleEvent.module.css'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function EventDesc({ Data }) {

  const location = useLocation()
  console.log(location)

  const ids = location.pathname.split("/")[2]

  const { data, loading, error } = useFetch(`/event/find/${ids}`);
  console.log(data)


  return (
    <div className={css.container}>
      <div className={css.row1}>
        <div className={css.colum1} style={{
          backgroundImage: `url(${data.photos})`,
          backgroundSize: `cover`,
          height: `400px`,
          borderRadius:  `4rem 0 4rem 0`
          // weight: `800px`,
        }}>
        </div>
        <div className={css.colum1}>
          <h1>{data.title}</h1>
          <h2>Per Item Price - {Data.price}/= </h2>
          <h2>{data.offer}% of - 500 off</h2>
          <h2>Qty - 1 {Data.qty} </h2>
          <p style={{ color: `#C52726`, fontSize: `40px`, fontWeight: `bold`, textAlign: `left`, fontFamily: `Lucida Console` }}>{data.prices}/=&nbsp;&nbsp;

            <span style={{ color: ` #7D7979`, fontSize: `20px`, fontFamily: `Lucida Console` }}>Total Price</span>
          </p>
          <button>1</button>
          <button>Add to Cart</button>
          <div className={css.buybutton}>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className={css.row1}>
        <div className={css.col1}>
          <div className={css.details}>
            <p>{data.description}</p>
            <p>Order your Ifthar Pack with us today, available for takeaway and delivery</p>
            <p>0703367119 / 0702583523 / 0703367122 to order</p>
            <p>Inclusions</p>
            <p>*Faluda<br />
              *Chicken Canjee<br />
              *Tandoori Chicken Sandwich<br />
              *Pen & Paneer Samosa<br />
              *Chilli Chicken Pie<br />
              *Beef Rolls
            </p>
            <p>Rs. {Data.price} net Per Pack<br />Combo Pack(Serves 4) - Rs. 7.700 net</p>
            <p>*Ideal For Ifthar dustributions amonst company staff<br />
              *Perfect for having Ifthar on-the-go<br />
              *Have Ifthar while travelling<br />
              *Comes in a box - easy for handling ad distribution<br />
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
export default EventDesc
