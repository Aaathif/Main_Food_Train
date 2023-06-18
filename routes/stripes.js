// const router = require("express").Router();
// const dotenv = require("dotenv");
// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb'
import stripePackage from 'stripe';
import dotenv from "dotenv"
import express from 'express'

const router = express.Router();

dotenv.config();
const stripe = stripePackage(process.env.STRIPE_KEY);

// MongoDB connection setup
const uri = process.env.MONGO;
const client = new MongoClient(uri);


//---------------







//---------------------

router.post("/stripe", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    async (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        try {
          await client.connect();
          const database = client.db('orderingFood');
          const collection = database.collection('payments');

          const paymentData = {
            tokenId: req.body.tokenId,
            amount: req.body.amount,
            email: req.body.email, // Store the email received from the frontend
            card: req.body.card, 
           

            // Add more fields as needed
          };

          await collection.insertOne(paymentData);

          console.log('Payment data stored in MongoDB:', paymentData);
          res.status(200).json(stripeRes);
        } catch (err) {
          console.error('Error storing payment data in MongoDB:', err);
          res.status(500).json({ error: 'An error occurred while storing payment data.' });
        } finally {
          await client.close();
        }
      }
    }
  );
});



// module.exports = router;
export default router