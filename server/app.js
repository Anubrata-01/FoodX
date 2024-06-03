import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import axios from "axios";
config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
)
app.get('/fetchSwiggyData', async (req, res) => {
  try {
      const { lat, lng, isSeoEnabled, pageType } = req.query;
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4714457&lng=88.3844319&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const response = await axios.get(apiUrl);
      res.json(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data from Swiggy API');
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
      console.log('Response headers:', error.response.headers);
  }
});