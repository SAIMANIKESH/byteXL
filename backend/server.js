import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedDomain = process.env.CLIENT_URL?.replace(/^https?:\/\//, "");
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (
      origin.includes(allowedDomain) ||
      origin === "http://localhost:5173"
    ) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

app.use(express.json());

app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city || "Hyderabad";
    const apiKey = process.env.OPENWEATHER_API_KEY; 
;
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const w = weatherRes.data;
    res.json({
      temperature: w.main.temp,
      condition: w.weather[0].description,
      city: w.name
    });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch weather data." });
  }
});

app.get("/api/currency", async (req, res) => {
  try {
    const { amount = 100 } = req.query;
    // Free rates API e.g. exchangerate-api.com
    const ratesRes = await axios.get("https://api.exchangerate-api.com/v4/latest/INR");
    const rates = ratesRes.data.rates;
    const usd = (amount * rates.USD).toFixed(2);
    const eur = (amount * rates.EUR).toFixed(2);
    res.json({ usd, eur });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch currency rates." });
  }
});

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "People who are crazy enough to think they can change the world, are the ones who do.",
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you want.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "If life were predictable it would cease to be life, and be without flavor."
];

app.get("/api/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
