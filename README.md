# InfoHub Challenge — ByteXL Full Stack Assignment

A simple but functional full-stack web app built with React.js (Vite), TailwindCSS v4, Node.js/Express, Axios.  
It includes: Weather Information, Currency Conversion (INR→USD/EUR), Motivational Quote Generator.

## Features
- **Weather Information:** Get live temperature and conditions for a city (default: London)
- **Currency Conversion:** INR to USD/EUR using latest exchange rates
- **Motivational Quote Generator:** Generates random motivational quotes

---

## Setup Instructions

### 1. Clone and Install Dependencies

```
git clone <repo_url>
cd InfoHub-Challenge
```

### Frontend
```
cd frontend
npm install
```

### Backend
```
cd ../backend
npm install
```


### 2. Add Your API Key

- Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
- Create `.env` folder in `backend` folder at base and put your key as:
```
OPENWEATHER_API_KEY=  # your_api_key_here
```

### 3. Start Frontend

- From InfoHub-Challenge/frontend
```
npm run dev
```

Access the app at `http://localhost:5173`

---

## Folder Structure
```
InfoHub-Challenge/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── api.js
│       ├── index.css
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── WeatherModule.jsx
│       │   ├── CurrencyConverter.jsx
│       │   └── QuoteGenerator.jsx
│       └── pages/
│           └── Home.jsx
├── backend/
│   ├── package.json
│   ├── server.js
│   └── .env           # Put your OpenWeatherMap API key here
└── README.md
```


---

## Tech Stack

- React.js 18 + Vite
- TailwindCSS v4 (no external CSS file needed)
- Node.js + Express (latest)
- Axios for API calls and currency/external APIs

---

## Deployment

You can deploy the frontend with Vercel, Netlify, or GitHub Pages (Vite static build),  
Backend can be deployed with Render, Railway, or any Node hosting.
