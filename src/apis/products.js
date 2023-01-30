import axios from "axios";
const BASE_URL = "https://us-central1-prueba-front-280718.cloudfunctions.net";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
