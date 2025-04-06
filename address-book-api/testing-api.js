const axios = require("axios");

const run = async () => {
  let url = "http://localhost:3000/contactGroup/6";

  try {

    let response = await axios.delete(url, {
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

run();
