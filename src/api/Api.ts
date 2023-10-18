import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `https://pedal-hub-backend-c5da4241aa7d.herokuapp.com/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
