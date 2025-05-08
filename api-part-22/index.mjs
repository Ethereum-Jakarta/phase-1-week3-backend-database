import axios from "axios";

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c1584a03afdb19221f98f58e852f4cd2"; // Invalid API Key.

const city = "New York";

const res = await axios.get(`${weatherAPI}?q=${city}&appid=${API_KEY}`);
console.log(res);
