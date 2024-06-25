import axios from "axios";

let URL;
switch (import.meta.env.REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000/";
    break;
  case "PRODUCTION":
    URL = "https://sports-facility-booking-platform-be.vercel.app/";
    // URL = 'https://leviathan-server.vercel.app/';
    break;
  default:
    URL = "http://localhost:5000/";
}
const fetcher = axios.create({
  baseURL: URL,
});

export default fetcher;
