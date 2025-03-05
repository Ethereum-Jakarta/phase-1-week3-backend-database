const axios = require("axios");

const baseURL = "http://localhost:3000";

axios
  .get(`${baseURL}/kontak`)
  .then((response) => {
    console.log("GET /kontak:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Test POST /contact
axios
  .post(`${baseURL}/kontak`, {
    name: "aku nak harvard",
    phone: "1234567890",
    email: "budi@example.com",
  })
  .then((response) => {
    console.log("POST /kontak:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });