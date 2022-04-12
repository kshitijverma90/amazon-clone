const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { response } = require("express");
const stripe=require("stripe")('sk_test_51KXOWHSAsX35jZntfIN8dKDbdaYws9uFfAZfqzJoPz22DdZRgSZ3FGU2GpGtZf4DTw9AGv3RA862CchaNEq5MxYQ00CEgaPg5B')

const app =express();

app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send('hello world'))
app.post('/payments/create',async (request,reponse)=>{
    const total=request.query.total;
    console.log('payment request receivered',total)
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})
exports.api=functions.https.onRequest(app)
