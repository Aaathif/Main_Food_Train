import React, { useState } from 'react';
import styles from './DeliveryPage.module.css';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

function DeliveryPage2(props) {

    const { data, loading, error } = useFetch("http://localhost:8000/api/delivery/find/64514fb1aa52a02d133c48c5");

    const handleSubmit = () => {
        // event.preventDefault();
        alert("Order is Confirm")
        // Handle payment submission here
      };
    const {
        address,
        phoneNumber,
        paymentMethod,
        cost,
        deliveryCharge,
        totalCost
       } = props;

    return (
        <div className={styles.bgr} style={{backgroundImage:`url(https://previews.123rf.com/images/rhoeo/rhoeo2003/rhoeo200300003/141240710-food-delivery-vector-illustration-courier-man-on-scooter-with-yellow-parcel-box-on-the-back-route.jpg)`}}>
        <form className={styles.container}>
        <div className={styles.section} style={{textIndent:`10px`}}>
        <h2 className={styles.sectionTitle} style={{textAlign:`center`, fontSize:`40px`, margin:`50px`,color:`#C52722`}}>Order Summary</h2>
        <p>Delivery Address: {data.address}</p>
        <p>Phone Number: {data.phoneNo}</p>
        <p>City : {data.city}</p>
        <hr />
        <p>Cost : {cost}2000</p>
        <p>Delivery Charge : {deliveryCharge}100</p>
        <p>Total Cost: {totalCost}2100</p>
        </div>
        <button onClick={handleSubmit} type="submit" className={styles.button0} style={{width:`500px`}}>Confirm</button>
        {/* <Link to='/deliveryEdit'>
        <button type="submit" className={styles.button10} style={{width:`200px`}}>Edit</button>
        </Link> */}
        </form>  
        </div>
      );
}

export default DeliveryPage2
