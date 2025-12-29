import axios from "axios";

export const api = axios.create({
  baseURL: "/", // Oder deine API-URL
  headers: { "X-Requested-With": "XMLHttpRequest" },
});
