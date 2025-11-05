import React, { useEffect, useState } from "react";
import api from "../api";

const CurrencyConverter = () => {
  const [inr, setInr] = useState(100);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const convert = async () => {
    setLoading(true);
    setErr("");
    try {
      const res = await api.get(`/api/currency?amount=${inr}`);
      setResult(res.data);
    } catch (error) {
      setErr("Failed to convert currency.");
    }
    setLoading(false);
  };

  useEffect(() => {
    convert();
  }, []);

  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg mt-6 w-full max-w-lg text-center mx-auto">
      <h3 className="text-lg font-bold mb-4 text-blue-700">INR to USD/EUR</h3>
      <div className="flex flex-col gap-4">
        <input className="border rounded px-4 py-2"
          type="number" value={inr}
          onChange={e => setInr(e.target.value)}
        />
        <button type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold"
          onClick={() => convert()}
          disabled={loading}
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>
      {result && (
        <div className="mt-4 text-lg">
          <div>USD: <b>{result.usd}</b></div>
          <div>EUR: <b>{result.eur}</b></div>
        </div>
      )}
      {err && <div className="text-red-500 mt-4">{err}</div>}
    </div>
  );
};

export default CurrencyConverter;
