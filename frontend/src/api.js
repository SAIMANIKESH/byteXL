import axios from "axios";

const api = axios.create({
  baseURL: "https://bytexl-2kee.onrender.com",
  // baseURL: "http://localhost:5000",
  withCredentials: true,            
});

export default api;
