import { store, type RootState } from "@/store";
import axios from "axios";

const api = axios.create({
   baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const state: RootState = store.getState();
    const isLoggedIn = state.auth.loggedIn;
    if (isLoggedIn) {
      config.headers.Authorization = "Bearer ojdf89234yerhhhdwfjikl9";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
