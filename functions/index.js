const { sendEmail } = require("./sendEmail");
const functions = require("firebase-functions");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_TEST);

const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(express.static("public"));
app.use(express.json());

app.post("/payments/creditCard", async (req, res) => {
  let lineItems = [];
  const items = req.body.items;
  const values = req.body.values;

  if (typeof items !== "undefined") {
    items.forEach((item) => {
      lineItems.push({
        price_data: {
          currency: "eur",
          unit_amount: item.amount,
          product_data: {
            name: item.title,
          },
        },
        quantity: item.quantity,
      });
    });
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://favre-bulle.web.app/success",
    cancel_url: "https://favre-bulle.web.app/no-success",
    metadata: values,
  });

  res.status(200).send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.post(
  "/webhook-test",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET_LIVE
      );
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    const dataObject = event.data.object;

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        //sendEmail(dataObject.metadata.email);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.post("/subscribe", async (req, res) => {
  const email = req.body.email;
  const getRequestParams = (email) => {
    // get env variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;

    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    // mailchimp datacenter - mailchimp api keys always look like this:
    // fe4f064432e4684878063s83121e4971-us6
    // We need the us6 part
    const DATACENTER = API_KEY.split("-")[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    console.log(url);
    // Add aditional params here. See full list of available params:
    // https://mailchimp.com/developer/reference/lists/list-members/
    const data = {
      email_address: email,
      status: "subscribed",
    };

    // Api key needs to be encoded in base 64 format
    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64ApiKey}`,
    };

    return {
      url,
      data,
      headers,
    };
  };
  try {
    const { url, data, headers } = getRequestParams(email);

    console.log(url);
    const response = await axios.post(url, data, { headers });
    // Success
    return new Response(JSON.stringify("Thank you for the subscription"), {
      status: 200,
    });
  } catch (error) {
    if (error) {
      console.log("error");
    }
  }
});

app.get("/test", (req, res) => {
  const userData = [{ teste: "teste" }, { teste: "teste" }];

  res.send(userData);
});

exports.api = functions.https.onRequest(app);
