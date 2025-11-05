import React, { useState } from "react";
import api from "../api";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchQuote = async () => {
    setLoading(true);
    setErr("");
    setQuote("");
    try {
      const res = await api.get("/api/quote");
      setQuote(res.data.quote);
    } catch (error) {
      setErr("Failed to fetch quote.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg mt-6 w-full max-w-lg text-center mx-auto">
      <h3 className="text-lg font-bold mb-4 text-blue-700">Motivational Quote Generator</h3>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold"
        onClick={fetchQuote}
        disabled={loading}
      >
        {loading ? "Getting..." : "Get Quote"}
      </button>
      {quote ? (
        <div className="mt-4 text-xl font-semibold text-blue-800">"{quote}"</div>
      ) : (
        <div className="mt-4 text-xl font-semibold text-blue-800">"No matter what you do, there will always be someone who is better than you."</div>
      )}
      {err && <div className="text-red-500 mt-4">{err}</div>}
    </div>
  );
};

export default QuoteGenerator;
